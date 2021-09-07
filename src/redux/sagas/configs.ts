/**
 * Created by nghinv on Sat Aug 28 2021
 * Copyright (c) 2021 nguyennghidt6@gmail.com
 */
import Languages from 'react-native-languages';
import { takeLatest, put } from 'redux-saga/effects';
import { setLanguage } from '../actions/configs';

function* getInitial(action: any) {
  try {
    yield put(setLanguage(action.payload.language));
  } catch (error) {
    // @ts-ignore
    yield put(setLanguage(Languages.language));
  }
}

export function* watchInitial() {
  yield takeLatest('persist/REHYDRATE', getInitial);
}
