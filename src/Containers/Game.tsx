import React, { useState, useEffect } from 'react';
import { View, TouchableWithoutFeedback, GestureResponderEvent } from 'react-native';
import * as routes from '../routes';
import AppButton from '../Components/AppButton';
import Cross from '../Components/Cross';
import Circle from '../Components/Circle';
import styled from 'styled-components';

const StyledView: any = styled(View)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const StyledBoard: any = styled(View)`
    border: 2px solid black;
    border-radius: 5px;
    width: 300px;
    height: 300px;
    margin-top: 50%;
    margin-bottom: auto;
`;

const pointsLocation = [
    { left: '210px', top: '10px' },
    { left: '110px', top: '10px' },
    { left: '10px', top: '10px' },
    { left: '210px', top: '110px' },
    { left: '110px', top: '110px' },
    { left: '10px', top: '110px' },
    { left: '210px', top: '210px' },
    { left: '110px', top: '210px' },
    { left: '10px', top: '210px' }
];

interface ITouched {
    startLeft: number;
    startTop: number;
    endLeft: number;
    endTop: number;
    id: number;
}

const touchedLocation: Array<ITouched> = [
    { startLeft: 0, startTop: 0, endLeft: 100, endTop: 100, id: 0 },
    { startLeft: 100, startTop: 0, endLeft: 200, endTop: 100, id: 1 },
    { startLeft: 200, startTop: 0, endLeft: 300, endTop: 100, id: 2 },

    { startLeft: 0, startTop: 100, endLeft: 100, endTop: 200, id: 3 },
    { startLeft: 100, startTop: 100, endLeft: 200, endTop: 200, id: 4 },
    { startLeft: 200, startTop: 100, endLeft: 300, endTop: 200, id: 5 },

    { startLeft: 0, startTop: 200, endLeft: 100, endTop: 300, id: 6 },
    { startLeft: 100, startTop: 200, endLeft: 200, endTop: 300, id: 7 },
    { startLeft: 200, startTop: 200, endLeft: 300, endTop: 300, id: 8 }
];

const Game: React.FunctionComponent = () => {
    const [userInputs, setUserInputs] = useState<Array<number>>([]);
    const [aiInputs, setAiInputs] = useState<Array<number>>([]);
    const [round, serRound] = useState<number>(null);

    const handleTouch = (e: GestureResponderEvent) => {
        const { locationX, locationY } = e.nativeEvent;
        const currentLocation = touchedLocation.find(i =>
            (locationX >= i.startLeft && locationX <= i.endLeft) && (locationY >= i.startTop && locationY <= i.endTop));
        if (currentLocation && userInputs.every(i => i !== currentLocation.id)) {
            setUserInputs(userInputs.concat(currentLocation.id));
        }
        else return;
        getAiRandom();
    }

    const getAiRandom = () => {
        let randNumber: number = Math.random() * 9;
        randNumber = Number.parseInt(`${randNumber}`);
        if (userInputs.concat(aiInputs).every(i => i !== randNumber)) {
            setAiInputs(aiInputs.concat(randNumber))
        }
    }

    return (
        <StyledView>
            <TouchableWithoutFeedback onPress={(e: GestureResponderEvent) => handleTouch(e)}>
                <StyledBoard>
                    <View style={{ position: 'absolute', height: 2, width: 298, backgroundColor: 'black', marginTop: 100 }} />
                    <View style={{ position: 'absolute', height: 2, width: 298, backgroundColor: 'black', marginTop: 200 }} />
                    <View style={{ position: 'absolute', height: 298, width: 2, backgroundColor: 'black', marginLeft: 100 }} />
                    <View style={{ position: 'absolute', height: 298, width: 2, backgroundColor: 'black', marginLeft: 200 }} />
                    {
                        userInputs.map((one, idx) => (
                            <Cross key={idx} marginLeft={pointsLocation[one].left} marginTop={pointsLocation[one].top} />
                        ))
                    }
                    {
                        aiInputs.map((one, idx) => (
                            <Circle key={idx} marginLeft={pointsLocation[one].left} marginTop={pointsLocation[one].top} />
                        ))
                    }
                </StyledBoard>
            </TouchableWithoutFeedback>
            <AppButton title='Stop playing' linkTo={routes.HOME} textColor='red' borderColor='red' />
        </StyledView>
    );
}

export default Game;