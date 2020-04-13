import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';
import { Link } from "react-router-native";
import * as routes from '../routes';
import AppButton from './AppButton';

const StyledView = styled(View)`
    border: 2px solid black;
    width: 250px;
    height: 250px;
`;

const GameBoard = () => (
    <View>
    <StyledView>

    </StyledView>
        <AppButton title='Stop Playing' linkTo={routes.HOME} textColor='red'/>
    </View>
);

export default GameBoard;