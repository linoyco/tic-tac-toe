import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import * as routes from '../routes';
import AppButton from '../Components/AppButton';

const StyledView = styled(View)`
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
    margin-bottom: auto;
`;

const App: React.FunctionComponent = () => (
    <StyledView>
        <StyledHeader>Welcome to tic tac toe</StyledHeader>
        <AppButton title='Start Play !' linkTo={`${routes.GAME_BOARD}`} textColor='green' />
    </StyledView>
);

export default App;