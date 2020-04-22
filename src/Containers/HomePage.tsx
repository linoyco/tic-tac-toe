import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import * as routes from '../routes';
import AppLinkButton from '../Components/AppLinkButton';

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

const HomePage: React.FunctionComponent = () => (
    <StyledView>
        <StyledHeader>Welcome to</StyledHeader>
        <StyledHeader style={{marginBottom:150}}>Tic Tac Toe!</StyledHeader>
        <AppLinkButton
            title='Please login'
            linkTo={`${routes.LOGIN}`}
            color='#6200ee'
        />
    </StyledView>
);

export default HomePage;