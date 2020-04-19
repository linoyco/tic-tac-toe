import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppRouter from './src/Containers/AppRouter';

const App = () => (
  <View style={styles.container}>
    <AppRouter />
  </View>
);

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
});

export default App;