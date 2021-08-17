/**
 * Created by nghinv on Tue Aug 17 2021
 * Copyright (c) 2021 nguyennghidt6@gmail.com
 */

import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useTheme, Container } from '@nghinv/react-native-design';

function Settings() {
  const { theme } = useTheme();

  return (
    <Container style={styles.container}>
      <Text style={theme.textStyles.h2}>Settings</Text>
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
