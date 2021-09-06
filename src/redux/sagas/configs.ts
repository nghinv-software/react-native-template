/**
 * Created by nghinv on Sat Aug 28 2021
 * Copyright (c) 2021 nguyennghidt6@gmail.com
 */

import { takeLatest, put } from 'redux-saga/effects';
import { setLanguage } from '../actions/configs';

function* getInitial(action: any) {
  try {
    yield put(setLanguage(action.payload.language));
  } catch (error) {
    try {
      yield put(setLanguage('en'));
    } catch (e) {
      yield put(setLanguage('en'));
    }
  }
}

export function* watchInitial() {
  yield takeLatest('persist/REHYDRATE', getInitial);
}
