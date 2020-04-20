import React from 'react';
import { View, Text } from 'react-native';
import AppLinkButton from '../Components/AppLinkButton';
import * as routes from '../routes';

const LoginPage = () => (
    <View>
        <Text>Login</Text>
        <AppLinkButton title='Login' linkTo={routes.LOGIN} />
    </View>
);

export default LoginPage;