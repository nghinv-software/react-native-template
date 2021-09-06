/**
 * Created by nghinv on Sat Aug 28 2021
 * Copyright (c) 2021 nguyennghidt6@gmail.com
 */

'use strick';

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { reduxStorage } from '../storage';
import Configs from './configs';

const setupConfig = {
  key: 'configReducer',
  storage: reduxStorage,
};

export default combineReducers({
  configs: persistReducer(setupConfig, Configs),
});
