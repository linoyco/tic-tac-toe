import React from 'react';
import { Text, View } from 'react-native';
import GameBoard from '../Components/GameBoard';
import styled from 'styled-components';

const StyledView = styled(View)`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid red;
`;

const StyledHeader = styled(Text)`
    font-weight: bold;
    font-size: 30px;
`;

const App = () => (
    <StyledView>
        <StyledHeader>Welcome to tic tac toe</StyledHeader>
        <GameBoard />
    </StyledView>
);

export default App;