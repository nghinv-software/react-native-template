/**
 * Created by nghinv on Mon Sep 06 2021
 * Copyright (c) 2021 nguyennghidt6@gmail.com
 */

import Config from 'react-native-config';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache();

export const client = new ApolloClient({
  cache,
  uri: Config.GRAPHQL_URI,
  // name: 'react-native-client',
  // version: '1.3',
  // queryDeduplication: false,
  // defaultOptions: {
  //   watchQuery: {
  //     fetchPolicy: 'cache-and-network',
  //   },
  // },
});
