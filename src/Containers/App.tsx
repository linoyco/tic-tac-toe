import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import * as routes from '../routes';
import AppLinkButton from '../Components/AppLinkButton';

const StyledView: any = styled(View)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

const StyledHeader = styled(Text)`
    font-weight: bold;
    font-size: 30px;
    margin-top: 10%;
    margin-bottom: 90%;
`;

const App: React.FunctionComponent = () => (
    <StyledView>
        <StyledHeader>Welcome to tic tac toe!</StyledHeader>
        <AppLinkButton title='Start to play !' linkTo={`${routes.GAME}`} textColor='green' borderColor='green'/>
    </StyledView>
);

export default App;