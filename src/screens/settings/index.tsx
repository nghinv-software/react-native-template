/**
 * Created by nghinv on Tue Aug 17 2021
 * Copyright (c) 2021 nguyennghidt6@gmail.com
 */

import React, { useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useTheme, Container, Button } from '@nghinv/react-native-design';
import { useNavigation } from '@react-navigation/core';
import { useQuery } from '@apollo/client';
import { EXCHANGE_RATES } from '../../graphql/helper';

function Settings() {
  const { theme } = useTheme();
  const navigation = useNavigation();
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Container style={styles.container}>
      <ScrollView style={styles.scrollStyle}>
        {
          loading ? <Text style={theme.textStyles.h2}>Loading...</Text>
            : error ? <Text style={theme.textStyles.h2}>Error query</Text>
              : data.rates.map(({ currency, rate }: any) => (
                <View key={currency}>
                  <Text style={theme.textStyles.h2}>{`${currency}: ${rate}`}</Text>
                </View>
              ))
        }
      </ScrollView>
      <Button onPress={onBack} title='Back' />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollStyle: {
    height: 200,
    width: 240,
    flexGrow: 0,
    marginBottom: 16,
  },
});

export default React.memo(Settings);
