/**
 * Created by nghinv on Sat Aug 28 2021
 * Copyright (c) 2021 nguyennghidt6@gmail.com
 */

'use strick';

import AsyncStorage from '@react-native-community/async-storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import Configs from './configs';

const setupConfig = {
  key: 'configReducer',
  storage: AsyncStorage,
};

export default combineReducers({
  configs: persistReducer(setupConfig, Configs),
});
