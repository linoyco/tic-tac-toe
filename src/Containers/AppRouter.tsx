import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';

import { navigationRef } from '../Lib/RootNavigation';
import * as Routes from '../Lib/routes';
import HomePage from './HomePage';
import Game from './Game';
import LoginPage from './LoginPage';
import PersonalPage from './PersonalPage';

const Stack = createStackNavigator();

const AppRouter = () => (
    <NavigationContainer ref={navigationRef} >
        <Stack.Navigator screenOptions={{ cardStyle: styles.containerStyle, headerTitle: '' }} initialRouteName={Routes.HOME}>
            <Stack.Screen name={Routes.HOME} component={HomePage}    />
            <Stack.Screen name={Routes.LOGIN} component={LoginPage} />
            <Stack.Screen name={Routes.PROFILE} component={PersonalPage} />
            <Stack.Screen name={Routes.GAME} component={Game} />
        </Stack.Navigator>
    </NavigationContainer>
);

const styles = StyleSheet.create({
    containerStyle: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },
});

export default AppRouter;
