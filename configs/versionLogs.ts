/**
 * Created by nghinv on Thu Jul 02 2020
 * Copyright (c) 2020 nguyennghidt6@gmail.com
 */

import { AddLog } from './versionRule';

AddLog({
  buildDate: '02/07/2020',
  version: 2,
  detail: [
    {
      title: 'Fix bug',
      contents: [
        'Fix some bug',
      ],
    },
  ],
});

AddLog({
  buildDate: '01/07/2020',
  version: 1,
  detail: [
    {
      title: 'Feature',
      contents: [
        'Initial config project',
      ],
    },
  ],
});
