/**
 * Created by nghinv on Mon Sep 06 2021
 * Copyright (c) 2021 nguyennghidt6@gmail.com
 */

import { Storage } from 'redux-persist';
import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

export const reduxStorage: Storage = {
  setItem: (key, value) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: (key) => {
    const value = storage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: (key) => {
    storage.delete(key);
    return Promise.resolve();
  },
};
