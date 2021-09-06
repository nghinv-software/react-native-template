/**
 * Created by nghinv on Sat Aug 28 2021
 * Copyright (c) 2021 nguyennghidt6@gmail.com
 */

import { store } from './configureStore';

export type LanguageType = 'en' | 'vi';

export type RootState = ReturnType<typeof store.getState>;
