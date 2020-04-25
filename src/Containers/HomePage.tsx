import React from 'react';
import styled from 'styled-components/native';
import * as Routes from '../Lib/routes';
import AppLinkButton from '../Components/AppLinkButton';
import * as RootNavigation from '../Lib/RootNavigation';

const StyledView: any = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 80%;
    margin: 10%;
    padding: 15px;
`;

const StyledHeader = styled.Text`
    font-weight: bold;
    font-size: 30px;
`;

const HomePage = () => (
    <StyledView>
        <StyledHeader>Welcome to</StyledHeader>
        <StyledHeader style={{ marginBottom: 150 }}>Tic Tac Toe!</StyledHeader>
        <AppLinkButton
            title='Please login'
            onPress={() => RootNavigation.navigate(Routes.LOGIN, null)}
            color='#6200ee'
        />
    </StyledView>
);

export default HomePage;