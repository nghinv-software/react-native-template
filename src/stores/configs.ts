/**
 * Created by nghinv on Thu Sep 09 2021
 * Copyright (c) 2021 nguyennghidt6@gmail.com
 */

import { types } from 'mobx-state-tree';
import I18n from 'react-native-i18n';

export const ConfigsInitialState = {
  language: 'en',
};

const ConfigsStore = types
  .model('configs', {
    language: types.string,
  })
  .actions(self => ({
    setLanguage(lang: string) {
      self.language = lang;
      I18n.locale = lang;
    },
  }));

export {
  ConfigsStore,
};
