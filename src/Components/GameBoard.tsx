import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import styled from 'styled-components';
import * as routes from '../routes';
import AppButton from './AppButton';

const StyledBoard: any = styled(View)`
    border: 2px solid black;
    border-radius: 10px;
    width: 300px;
    height: 300px;
    margin-top: 50%;
    margin-bottom: auto;
`;

const StyledRow: any = styled(View)`
    display: flex;
    flex-direction: row;
    border: 2px solid red;
    height: 300px;
    width: 300px;
`;

const StyledColumn: any = styled(View)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledView: any = styled(View)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const GameBoard: React.FunctionComponent = () => (
    <StyledView>
        <StyledBoard>

            <StyledColumn>
                <View style={{ height: 2, width: 300, backgroundColor: 'black', transform: [{ translateY: 100 }] }} />
                <View style={{ height: 2, width: 300, backgroundColor: 'black', transform: [{ translateY: 200 }] }} />
            </StyledColumn>

            <StyledRow>
                <View style={{ height: 300, width: 2, backgroundColor: 'black', transform: [{ translateX: -100 }] }} />
                <View style={{ height: 300, width: 2, backgroundColor: 'black', transform: [{ translateX: -200 }] }} />
            </StyledRow>

        </StyledBoard>
        <AppButton title='Stop playing' linkTo={routes.HOME} textColor='red' borderColor='red' />
    </StyledView>
);

export default GameBoard;