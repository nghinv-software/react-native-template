/**
 * Created by nghinv on Sat Aug 28 2021
 * Copyright (c) 2021 nguyennghidt6@gmail.com
 */

import { LanguageType } from '../types';

export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

export const setLanguage = (data: LanguageType) => {
  return {
    type: CHANGE_LANGUAGE,
    payload: data,
  };
};
