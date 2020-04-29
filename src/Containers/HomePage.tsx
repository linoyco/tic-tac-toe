import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import * as Routes from '../Lib/routes';
import AppLinkButton from '../Components/AppLinkButton';
import * as RootNavigation from '../Lib/RootNavigation';
import Logo from '../Components/Logo';

const HomePage: React.FunctionComponent = () => (
    <View style={styles.container}>
        <Text style={styles.header}>Welcome to</Text>
        <Text style={[styles.header, { marginBottom: '10%' }]}>Tic Tac Toe!</Text>
        <Logo />
        <View style={styles.buttonView} >
            <AppLinkButton key="123"
                title='Please login'
                onPress={() => RootNavigation.navigate(Routes.LOGIN, null)}
                color='#6200ee'
            />
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        padding: 15,
    },
    header: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    buttonView: {
        width: '80%',
        marginTop: '10%'
    }
});

export default HomePage;