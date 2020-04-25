import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import * as Routes from '../Lib/routes';
import AppLinkButton from '../Components/AppLinkButton';
import * as RootNavigation from '../Lib/RootNavigation';

const HomePage = () => (
    <View style={styles.container}>
        <Text style={styles.header}>Welcome to</Text>
        <Text style={[styles.header, { marginBottom: '50%' }]}>Tic Tac Toe!</Text>
        <AppLinkButton
            title='Please login'
            onPress={() => RootNavigation.navigate(Routes.LOGIN, null)}
            color='#6200ee'
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: '80%',
        margin: '10%',
        padding: 15
    },
    header: {
        fontWeight: 'bold',
        fontSize: 30
    }
});

export default HomePage;