import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

import * as Routes from '../Lib/routes';
import AppLinkButton from '../Components/AppLinkButton';
import * as RootNavigation from '../Lib/RootNavigation';
import { IRouteProps, navigateToLogin } from './AppRouter';

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
`;

const HomePage = ({ navigation }: IRouteProps) => (
    <StyledView>
        <StyledHeader>Welcome to</StyledHeader>
        <StyledHeader style={{ marginBottom: 150 }}>Tic Tac Toe!</StyledHeader>
        <AppLinkButton
            title='Please login'
            // onPress={() => RootNavigation.navigate(Routes.GAME, null)}
            onPress={() => navigateToLogin(navigation)}
            color='#6200ee'
        />
    </StyledView>
);

export default HomePage;