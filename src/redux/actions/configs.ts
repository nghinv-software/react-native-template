/**
 * Created by nghinv on Sat Aug 28 2021
 * Copyright (c) 2021 nguyennghidt6@gmail.com
 */

import { LanguageType } from '../types';
import i18n from '../../i18n';

export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

export const setLanguage = (data: LanguageType) => {
  // Set change language
  i18n.locale = data;
  return {
    type: CHANGE_LANGUAGE,
    payload: data,
  };
};
