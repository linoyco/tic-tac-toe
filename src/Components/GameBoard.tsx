import React from 'react';
import { View } from 'react-native';
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
            <View style={{ position: 'absolute', height: 2, width: 298, backgroundColor: 'black', transform: [{ translateY: 100 }] }} />
            <View style={{ position: 'absolute', height: 2, width: 298, backgroundColor: 'black', transform: [{ translateY: 200 }] }} />
            <View style={{ position: 'absolute', height: 298, width: 2, backgroundColor: 'black', transform: [{ translateX: 100 }] }} />
            <View style={{ position: 'absolute', height: 298, width: 2, backgroundColor: 'black', transform: [{ translateX: 200 }] }} />
        </StyledBoard>
        <AppButton title='Stop playing' linkTo={routes.HOME} textColor='red' borderColor='red' />
    </StyledView>
);

export default GameBoard;