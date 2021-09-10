/**
 * Created by nghinv on Tue Aug 17 2021
 * Copyright (c) 2021 nguyennghidt6@gmail.com
 */

import React, { useEffect } from 'react';
import SplashScreen from 'react-native-lottie-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ServiceProviderWithTheme, ThemeProvider } from '@nghinv/react-native-design';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'mobx-react';
import rootStore from './stores';
import Navigator from './navigator';
import { client } from './graphql';

const stores = {
  rootStore,
};

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider {...stores}>
      <ApolloProvider client={client}>
        <SafeAreaProvider>
          <ThemeProvider themeMode='dark'>
            <ServiceProviderWithTheme>
              <Navigator />
            </ServiceProviderWithTheme>
          </ThemeProvider>
        </SafeAreaProvider>
      </ApolloProvider>
    </Provider>
  );
}

export default React.memo(App);
