/**
 * Created by nghinv on Tue Aug 17 2021
 * Copyright (c) 2021 nguyennghidt6@gmail.com
 */

import React, { useCallback } from 'react';
import { Text, StyleSheet } from 'react-native';
import { useTheme, Container, Button } from '@nghinv/react-native-design';
import { useNavigation } from '@react-navigation/core';

function Settings() {
  const { theme } = useTheme();
  const navigation = useNavigation();

  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Container style={styles.container}>
      <Text style={theme.textStyles.h2}>Settings</Text>
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
