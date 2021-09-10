/**
 * Created by nghinv on Tue Sep 07 2021
 * Copyright (c) 2021 nguyennghidt6@gmail.com
 */

import React from 'react';
import { Text } from '@nghinv/react-native-design';
import { TextPropsType } from '@nghinv/react-native-design/lib/typescript/components/Text';
import { observer } from 'mobx-react-lite';
import { getSnapshot } from 'mobx-state-tree';
import i18n from '../../i18n';
import rootStore from '../../stores';

interface TranslateTextType extends TextPropsType {
  language?: string;
  translateKey?: string;
}

function TranslateText(props: TranslateTextType) {
  const { translateKey, children } = props;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { language } = getSnapshot(rootStore).configs;

  return (
    <Text {...props}>
      {translateKey ? i18n.t(translateKey) : children}
    </Text>
  );
}

export default observer(TranslateText);
