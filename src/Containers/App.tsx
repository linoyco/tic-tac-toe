import React from 'react';
import { Text, View, Button } from 'react-native';
import styled from 'styled-components';
import { Link } from "react-router-native";
import * as routes from '../routes';

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
        <Link to={routes.GAME_BOARD}>
            <View>
                <Text>Start Play !</Text>
            </View>
        </Link>
    </StyledView>
);

export default App;