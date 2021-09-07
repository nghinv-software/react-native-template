/**
 * Created by nghinv on Tue Sep 07 2021
 * Copyright (c) 2021 nguyennghidt6@gmail.com
 */

import React from 'react';
import { Text } from '@nghinv/react-native-design';
import { TextPropsType } from '@nghinv/react-native-design/lib/typescript/components/Text';
import { connect } from 'react-redux';
import { LanguageType, RootState } from '../../redux/types';
import i18n from '../../i18n';

interface TranslateTextType extends TextPropsType {
  language: LanguageType;
  translateKey?: string;
}

function TranslateText(props: TranslateTextType) {
  const { translateKey, children } = props;
  return (
    <Text {...props}>
      {translateKey ? i18n.t(translateKey) : children}
    </Text>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    language: state.configs.language,
  };
};

export default connect(mapStateToProps)(TranslateText);
