import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';
import {MainAppScreen} from './src/screens/MainApp';
import MiniAppScreen from './src/screens/MiniApp';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainAppScreen">
          <Stack.Screen name="MainAppScreen" component={MainAppScreen} />
          <Stack.Screen name="MiniApp" component={MiniAppScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
