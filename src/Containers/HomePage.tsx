import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import * as Routes from '../Lib/routes';
import AppLinkButton from '../Components/AppLinkButton';
import * as RootNavigation from '../Lib/RootNavigation';
import Logo from '../Components/Logo';

const HomePage: React.FunctionComponent = () => (
    <View style={styles.container}>
        <Text style={styles.header}>Welcome to</Text>
        <Text style={[styles.header, { marginTop: 0 }]}>Tic Tac Toe!</Text>
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
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        height: '80%',
        padding: 15,
        borderColor:'yellow',
        borderWidth: 3
    },
    header: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    buttonView: {
        width: '80%',
    }
});

export default HomePage;