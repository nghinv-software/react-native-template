/**
 * Created by nghinv on Mon Sep 06 2021
 * Copyright (c) 2021 nguyennghidt6@gmail.com
 */

import I18n from 'react-native-i18n';
import en from './locales/en';
import vi from './locales/vi';

I18n.fallbacks = true;

I18n.translations = {
  en,
  vi,
};

export default I18n;
