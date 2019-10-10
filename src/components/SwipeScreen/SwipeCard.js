import React from  'react';
import { View, Text, Image } from 'react-native';
import { Card } from 'react-native-elements';

const SwipeCard = ({ key, title, formattedRelativeTime, snippet, company }) => {
  return (
    <Card title={title} key={key}>
      <View style={{ height: 300 }}>
        <Image
          source={require('./assets/photo.jpg')}
          style={{ width: '100%', height: 300 }}
        />
      </View>
      <View style={styles.detailWrapper}>
        <Text>{company}</Text>
        <Text>{formattedRelativeTime}</Text>
      </View>
      <Text numberOfLines={4}>
        {snippet.replace(/<b>/g, '').replace(/<\/b>/g, '')}
      </Text>
    </Card>
  );
};

const styles = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  }
};

export default SwipeCard;
