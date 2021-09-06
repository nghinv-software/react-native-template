/**
 * Created by nghinv on Sat Aug 28 2021
 * Copyright (c) 2021 nguyennghidt6@gmail.com
 */

import { AnyAction } from 'redux';
import { CHANGE_LANGUAGE } from '../actions/configs';
import { LanguageType } from '../type';

type State = {
  language: LanguageType;
}

const initialState: State = {
  language: 'en',
};

export default function configs(state = initialState, action: AnyAction) {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
}
