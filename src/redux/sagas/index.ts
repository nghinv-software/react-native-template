/**
 * Created by nghinv on Sat Aug 28 2021
 * Copyright (c) 2021 nguyennghidt6@gmail.com
 */

'use strick';

import { all, fork } from 'redux-saga/effects';
import * as configs from './configs';

export default function* rootSaga() {
  yield all([
    ...Object.values(configs),
  ].map(fork));
}
