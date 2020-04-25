import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import * as Routes from '../Lib/routes';
import AppLinkButton from '../Components/AppLinkButton';
import * as RootNavigation from '../Lib/RootNavigation';
import Logo from '../Components/Logo';

const HomePage = () => (
    <View style={styles.container}>
        <Text style={styles.header}>Welcome to</Text>
        <Text style={[styles.header, { marginBottom: '50%' }]}>Tic Tac Toe!</Text>
        <Logo />
        <View style={styles.buttonView}>
            <AppLinkButton
                title='Please login'
                onPress={() => RootNavigation.navigate(Routes.LOGIN, null)}
                color='#6200ee'
            />
        </View>
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
        padding: 15,
    },
    header: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    buttonView: {
        width: '100%',
        marginTop: 'auto'
    }
});

export default HomePage;