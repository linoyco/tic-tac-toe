import React from 'react';
import { View, Text } from 'react-native';
import AppLinkButton from '../Components/AppLinkButton';
import * as routes from '../routes';

const PersonalPage = () => (
    <View>
        <Text>Profile</Text>
        <AppLinkButton title='Start to play !' linkTo={`${routes.GAME}`} textColor='green' borderColor='green' />
        <AppLinkButton title='Log out' linkTo={`${routes.HOME}`} textColor='red' borderColor='red' />
    </View>
);

export default PersonalPage;