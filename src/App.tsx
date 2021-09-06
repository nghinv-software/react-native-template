/**
 * Created by nghinv on Tue Aug 17 2021
 * Copyright (c) 2021 nguyennghidt6@gmail.com
 */

import React, { useEffect } from 'react';
import SplashScreen from 'react-native-lottie-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ServiceProviderWithTheme, ThemeProvider } from '@nghinv/react-native-design';
import { Provider } from 'react-redux';
import { store } from './redux/configureStore';
import Navigator from './navigator';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <ThemeProvider themeMode='dark'>
          <ServiceProviderWithTheme>
            <Navigator />
          </ServiceProviderWithTheme>
        </ThemeProvider>
      </SafeAreaProvider>
    </Provider>
  );
}

export default React.memo(App);
