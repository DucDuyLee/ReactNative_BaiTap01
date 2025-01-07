import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import IntroScreenPage from '../screens/IntroScreen';
import HomepagePage from '../screens/Homepage';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IntroScreen">
        <Stack.Screen name="IntroScreen" component={IntroScreenPage} />
        <Stack.Screen name="Homepage" component={HomepagePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
