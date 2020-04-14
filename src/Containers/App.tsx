import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import * as routes from '../routes';
import AppButton from '../Components/AppButton';

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
    margin-top: 15%;
    margin-bottom: auto;
`;

const App: React.FunctionComponent = () => (
    <StyledView>
        <StyledHeader>Welcome to tic tac toe</StyledHeader>
        <AppButton title='Start to play !' linkTo={`${routes.GAME_BOARD}`} textColor='green' borderColor='green'/>
    </StyledView>
);

export default App;