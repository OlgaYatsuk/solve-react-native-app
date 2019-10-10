// @flow
import React from 'react';
import {StyleSheet, Button, Text, View, Animated, Dimensions, PanResponder} from 'react-native';
import SwipeCard from './SwipeCard';
import {Card} from 'react-native-elements';
import jobs from './data';


type State = {
  likedJobs: number,
  passedJobs: number
}

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

class SwipeContainer extends React.Component<State> {
  state = {
    likedJobs: 0,
    passedJobs: 0,
    index: 0
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
    }
  });

  forceSwipe = (direction) => {
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
    Animated.timing(this.position, {
      toValue: {x, y: 0},
      duration: SWIPE_OUT_DURATION
    }).start(() => this.onSwipeComplete(direction));
  };

  resetPosition = () => {
    Animated.spring(this.position, {
      toValue: {x: 0, y: 0}
    }).start();
  };

  onSwipeComplete(direction) {
    const {onSwipeLeft, onSwipeRight} = this;
    const item = jobs[this.state.index];

    direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);
    this.position.setValue({x: 0, y: 0});
    this.setState({index: this.state.index + 1})

    // UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    // LayoutAnimation.spring();
  }

  getCardStyle() {
    const {position} = this;
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ['-120deg', '0deg', '120deg']
    });

    return {
      ...position.getLayout(),
      transform: [{rotate}]
    }
  }

  onSwipeRight = () => {
    this.setState(({likedJobs}) => ({
      likedJobs: likedJobs + 1
    }));
  };

  onSwipeLeft = () => {
    this.setState(({passedJobs}) => ({
      passedJobs: passedJobs + 1
    }));
  };


  renderNoMoreCards = () => {
    return (
      <Card title="No More cards">
        <Button
          title="Reload"
          large
          onPress={this.resetSearch}
          icon={{name: 'my-location'}}
          backgroundColor="#03A9F4"
        />
      </Card>
    );
  };

  resetSearch = () => {
    this.setState({
      index: 0,
      likedJobs: 0,
      passedJobs: 0
    })
  };


  render() {
    const {passedJobs, likedJobs} = this.state;

    if (this.state.index >= jobs.length) {
      return this.renderNoMoreCards();
    }

    return (
      <View style={styles.container}>
        <View style={styles.statusStyle}>
          <Text style={{color: 'red'}}>Passed: {passedJobs}</Text>
          <Text style={{color: 'blue'}}>Liked: {likedJobs}</Text>
        </View>
        <View>
        {jobs.map((job, index) => {
          if (index < this.state.index) {
            return null;
          }

          if (index === this.state.index) {
            return <Animated.View style={[this.getCardStyle(), styles.cardStyle, {zIndex: 99}]}
                                  {...this._panResponder.panHandlers}>
              <SwipeCard
                style={[styles.cardStyle, {top: 20 * (index - this.state.index), zIndex: 5}]}
                key={job.jobId}
                title={job.jobtitle}
                company={job.company}
                formattedRelativeTime={job.formattedRelativeTime}
                snippet={job.snippet}
              />
            </Animated.View>
          }

          return (
            <View style={[styles.cardStyle, { top: 20 * (index - this.state.index), zIndex: 5 }]}>
              <SwipeCard
                key={job.jobId}
                title={job.jobtitle}
                company={job.company}
                formattedRelativeTime={job.formattedRelativeTime}
                snippet={job.snippet}
              />
            </View>
          )
        })}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  statusStyle: {
    padding: 15,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around'
  },
  cardStyle: {
    position: 'absolute',
    width: SCREEN_WIDTH,
  },
  cardWrapper: {
    marginTop: 50
  }
});

export default SwipeContainer;
