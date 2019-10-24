import React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  Animated,
  Dimensions,
  PanResponder,
} from 'react-native';
import SwipeCard from './SwipeCard';
import {Card} from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

class SwipeCardContainer extends React.Component<State> {
  state = {
    index: 0,
  };

  position = new Animated.ValueXY();

  _panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gesture) => {
      this.position.setValue({x: gesture.dx, y: gesture.dy});
    },
    onPanResponderRelease: (evt, gesture) => {
      if (gesture.dx > SWIPE_THRESHOLD) {
        this.forceSwipe('right');
      } else if (gesture.dx < -SWIPE_THRESHOLD) {
        this.forceSwipe('left');
      } else {
        this.resetPosition();
      }
    },
  });

  forceSwipe = direction => {
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
    Animated.timing(this.position, {
      toValue: {x, y: 0},
      duration: SWIPE_OUT_DURATION,
    }).start(() => this.handleSwipeComplete(direction));
  };

  handleSwipeComplete = direction => {
    const item = this.props.users[this.state.index];

    direction === 'right'
      ? this.props.onSwipeRight(item)
      : this.props.onSwipeLeft(item);
    this.position.setValue({x: 0, y: 0});
    this.setState({index: this.state.index + 1});
  };

  resetPosition = () => {
    Animated.spring(this.position, {
      toValue: {x: 0, y: 0},
    }).start();
  };

  getCardStyle() {
    const {position} = this;
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ['-120deg', '0deg', '120deg'],
    });

    return {
      ...position.getLayout(),
      transform: [{rotate}],
    };
  }

  renderNoMoreCards = () => {
    return (
      <Card title="No More cards">
        <Button
          title="Reload"
          large
          onPress={this.props.resetSearch}
          icon={{name: 'my-location'}}
          backgroundColor="#03A9F4"
        />
      </Card>
    );
  };

  render() {
    const {users} = this.props;
    if (this.state.index >= this.props.users.length) {
      return this.renderNoMoreCards();
    }

    return (
      <View style={styles.container}>
        <View>
          {users.map((user, index) => {
            if (index < this.state.index) {
              return null;
            }

            if (index === this.state.index) {
              return (
                <Animated.View
                  style={[this.getCardStyle(), styles.cardStyle, {zIndex: 99}]}
                  {...this._panResponder.panHandlers}>
                  <SwipeCard
                    title={user.name.first}
                    name={`${user.name.first} ${user.name.last}`}
                    photo={user.picture.large}
                  />
                </Animated.View>
              );
            }

            return (
              <View
                key={index}
                style={[
                  styles.cardStyle,
                  {top: 0.9 * (index - this.state.index), zIndex: 5},
                ]}>
                <SwipeCard
                  title={user.name.first}
                  photo={user.picture.large}
                  name={`${user.name.first} ${user.name.last}`}
                />
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusStyle: {
    padding: 15,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  cardStyle: {
    position: 'absolute',
    width: SCREEN_WIDTH,
  },
  cardWrapper: {
    marginTop: 50,
  },
});

export default SwipeCardContainer;
