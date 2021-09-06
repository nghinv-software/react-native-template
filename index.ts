/**
 * Created by nghinv on Tue Aug 17 2021
 * Copyright (c) 2021 nguyennghidt6@gmail.com
 */

import { AppRegistry } from 'react-native';
import 'react-native-gesture-handler';
import App from './src/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
