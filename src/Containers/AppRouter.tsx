import React from 'react';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

import { navigationRef } from '../Lib/RootNavigation';
import * as Routes from '../Lib/routes';
import HomePage from './HomePage';
import Game from './Game';
import LoginPage from './LoginPage';
import PersonalPage from './PersonalPage';

export const navigateToLogin = (navigation) => {
    console.log("clicked")
    navigation.navigate(Routes.LOGIN)
}

type RootStackParamList = {
    Home: undefined;
    Profile: { userId: string };
    Feed: { sort: 'latest' | 'top' } | undefined;
};

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;

type ProfileScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Profile'
>;

export type IRouteProps = {
    route: ProfileScreenRouteProp;
    navigation: ProfileScreenNavigationProp;
};

const Stack = createStackNavigator();

const AppRouter = () => (
    <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName={Routes.HOME}>
            <Stack.Screen name={Routes.HOME} component={HomePage} />
            <Stack.Screen name={Routes.LOGIN} component={LoginPage} />
            <Stack.Screen name={Routes.PROFILE} component={PersonalPage} />
            <Stack.Screen name={Routes.GAME} component={Game} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default AppRouter;
