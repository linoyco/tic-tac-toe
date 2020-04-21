import React from 'react';
import { View, Text } from 'react-native';
import AppLinkButton from '../Components/AppLinkButton';
import * as routes from '../routes';
import styled from 'styled-components';

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

const PersonalPage = () => (
    <StyledView>
        <StyledHeader>Hello, &(will be name)</StyledHeader>
        <AppLinkButton
            title='Start to play !'
            linkTo={`${routes.GAME}`}
            color='#A6F2A6'
        />
        <AppLinkButton
            title='Log out'
            linkTo={`${routes.HOME}`}
            color='#636364'
        />
    </StyledView>
);

export default PersonalPage;