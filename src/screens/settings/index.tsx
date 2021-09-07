/**
 * Created by nghinv on Tue Aug 17 2021
 * Copyright (c) 2021 nguyennghidt6@gmail.com
 */

import React, { useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useTheme, Container, Button, SizeBox } from '@nghinv/react-native-design';
import { useNavigation } from '@react-navigation/core';
import { useQuery } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { EXCHANGE_RATES } from '../../graphql/helper';
import i18n from '../../i18n';
import { TranslateText } from '../../components';
import { setLanguage } from '../../redux/actions/configs';

function Settings() {
  const { theme } = useTheme();
  const navigation = useNavigation();
  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  const dispatch = useDispatch();

  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onToggleLanguage = useCallback(() => {
    dispatch(setLanguage(i18n.locale === 'en' ? 'vi' : 'en'));
  }, [dispatch]);

  return (
    <Container style={styles.container}>
      <ScrollView style={styles.scrollStyle}>
        {
          loading ? <TranslateText translateKey='loading' type='h1' />
            : error ? <TranslateText translateKey='error' type='h2' />
              : data.rates.map(({ currency, rate }: any) => (
                <View key={currency}>
                  <TranslateText style={theme.textStyles.h2}>{`${currency}: ${rate}`}</TranslateText>
                </View>
              ))
        }
      </ScrollView>
      <Button onPress={onToggleLanguage} title='Language' />
      <SizeBox height={16} />
      <Button onPress={onBack} title='Back' />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default React.memo(Settings);
