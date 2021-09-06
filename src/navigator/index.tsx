/**
 * Created by nghinv on Tue Aug 17 2021
 * Copyright (c) 2021 nguyennghidt6@gmail.com
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import DashboardScreen from '../screens/dashboard';
import SettingsScreen from '../screens/settings';
import { Routes } from '../utils/routes';

// enableScreens(true);

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          animation: 'slide_from_right',
          headerTitleStyle: {
            color: 'white',
          },
        }}
        initialRouteName={Routes.DASHBOARD}
      >
        <Stack.Screen name={Routes.DASHBOARD} component={DashboardScreen} />
        <Stack.Screen name={Routes.SETTINGS} component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default React.memo(Navigator);
