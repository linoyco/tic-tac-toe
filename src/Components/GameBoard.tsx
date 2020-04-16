import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components';
import * as routes from '../routes';
import AppButton from './AppButton';
import Circle from './Circle';
import Cross from './Cross';

const StyledBoard: any = styled(View)`
    border: 2px solid black;
    border-radius: 5px;
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

const pointsLocation = [
    { left: '10px', top: '10px' },
    { left: '10px', top: '110px' },
    { left: '10px', top: '210px' },
    { left: '110px', top: '10px' },
    { left: '110px', top: '110px' },
    { left: '110px', top: '210px' },
    { left: '210px', top: '10px' },
    { left: '210px', top: '110px' },
    { left: '210px', top: '210px' }
];

const GameBoard: React.FunctionComponent = () => (
    <StyledView>
        <StyledBoard>
            <View style={{ position: 'absolute', height: 2, width: 298, backgroundColor: 'black', marginTop: 100 }} />
            <View style={{ position: 'absolute', height: 2, width: 298, backgroundColor: 'black', marginTop: 200 }} />
            <View style={{ position: 'absolute', height: 298, width: 2, backgroundColor: 'black', marginLeft: 100 }} />
            <View style={{ position: 'absolute', height: 298, width: 2, backgroundColor: 'black', marginLeft: 200 }} />
        </StyledBoard>
        <AppButton title='Stop playing' linkTo={routes.HOME} textColor='red' borderColor='red' />
    </StyledView>
);

export default GameBoard;