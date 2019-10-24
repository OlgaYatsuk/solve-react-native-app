import React from 'react';
import {View, Text, Image} from 'react-native';
import {Card} from 'react-native-elements';

const SwipeCard = props => {
  return (
    <Card style={props.style} title={props.title} key={props.key}>
      <View style={{height: 300}}>
        <Image
          source={{uri: props.photo}}
          style={{width: '100%', height: 300}}
        />
      </View>
      <View style={styles.detailWrapper}>
        <Text>{props.name}</Text>
        <Text>{props.name}</Text>
      </View>
    </Card>
  );
};

const styles = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
};

export default SwipeCard;
