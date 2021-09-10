/**
 * Created by nghinv on Thu Sep 09 2021
 * Copyright (c) 2021 nguyennghidt6@gmail.com
 */

import { types } from 'mobx-state-tree';
import { ConfigsStore, ConfigsInitialState } from './configs';

const RootModel = types.model({
  configs: ConfigsStore,
});

const rootStore = RootModel.create(
  {
    configs: ConfigsInitialState,
  },
);

export default rootStore;
