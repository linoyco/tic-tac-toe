import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';
import { Link } from "react-router-native";
import * as routes from '../routes';

const StyledView = styled(View)`
    border: 2px solid black;
    width: 150px;
    height: 150px;
`;

const GameBoard = () => (
    <View>
    <StyledView>

    </StyledView>
    <Link to={routes.HOME}>
            <View>
                <Text>Stop Playing</Text>
            </View>
        </Link>
    </View>
);

export default GameBoard;