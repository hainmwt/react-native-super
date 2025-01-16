import React from 'react';
import {Text, View} from 'react-native';
import MiniAppHomeScreen from '../../../mini-app/App';

const MiniAppScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Text>MiniApp sẽ được mở tại đây</Text>
      <MiniAppHomeScreen />
    </View>
  );
};

export default MiniAppScreen;
