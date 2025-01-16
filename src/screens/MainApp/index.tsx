import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';

export const MainAppScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <Text>Main App</Text>
      <Button
        title="Open MiniApp"
        //@ts-ignore
        onPress={() => navigation.navigate('MiniApp')}
      />
    </View>
  );
};
