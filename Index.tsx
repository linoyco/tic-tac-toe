import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppRouter from './src/Containers/AppRouter';

const Index = () => (
  <View style={styles.container}>
    <AppRouter />
  </View>
);

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
});

export default Index;