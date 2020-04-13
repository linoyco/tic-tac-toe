import React from 'react';
import { StyleSheet, View } from 'react-native';
import App from './src/Containers/App';

const Index = () => (
  <View style={styles.container}>
    <App />
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