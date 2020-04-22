import React from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Dispatch } from 'redux';

import AppLinkButton from '../Components/AppLinkButton';
import * as Routes from '../Lib/routes';
import { loginRequest } from '../State/Actions/App';
import * as RootNavigation from '../Lib/RootNavigation';

const StyledView: any = styled(View)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 100%;
`;

const StyledHeader = styled(Text)`
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 40%;
`;

const PersonalPage: React.FunctionComponent = () => {
    const dispatch: Dispatch = useDispatch();

    const name = useSelector((state: any) => state.app.loginDetails.fullName);

    const handleLogOut = () => {
        dispatch(loginRequest({ phoneNumber: '', fullName: '' }));
        RootNavigation.navigate(Routes.HOME, null);
    }

    return (
        <StyledView>
            <StyledHeader>Hello, {name}</StyledHeader>
            <AppLinkButton
                title='Start to play !'
                onPress={() => RootNavigation.navigate(Routes.GAME, null)}
                color='#A6F2A6'
            />
            <AppLinkButton
                title='Log out'
                color='#636364'
                onPress={() => handleLogOut()}
            />
        </StyledView>
    );
}
export default PersonalPage;