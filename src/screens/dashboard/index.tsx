/**
 * Created by nghinv on Tue Aug 17 2021
 * Copyright (c) 2021 nguyennghidt6@gmail.com
 */

import React, { useCallback } from 'react';
import { Text, StyleSheet } from 'react-native';
import { useTheme, Container, Button } from '@nghinv/react-native-design';
import { Services } from '@nghinv/react-native-services';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../utils/routes';

function Dashboard() {
  const navigation = useNavigation<any>();
  const { theme, toggleThemeMode } = useTheme();

  const onShowAlert = useCallback(() => {
    Services.Alert.alert({
      title: 'Notification',
      message: 'Dashboard Screen',
      actions: [
        { text: 'OK' },
      ],
    });
  }, []);

  const onSettingsScreen = useCallback(() => {
    navigation.navigate(Routes.SETTINGS);
  }, [navigation]);

  const onToggleTheme = useCallback(() => {
    toggleThemeMode();
  }, [toggleThemeMode]);

  return (
    <Container style={styles.container}>
      <Text style={theme.textStyles.h2}>Dashboard</Text>
      <Button title='Show Alert' style={styles.button} onPress={onShowAlert} />
      <Button title='Navigate to Settings Screen' style={styles.button} onPress={onSettingsScreen} />
      <Button title='Toggle Theme' style={styles.button} onPress={onToggleTheme} />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 16,
  },
});

export default React.memo(Dashboard);
