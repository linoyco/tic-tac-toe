import React, { useState } from 'react';
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import DialogBox from "../Components/DialogBox"
import * as Routes from '../Lib/routes';
import AppLinkButton from '../Components/AppLinkButton';
import * as RootNavigation from '../Lib/RootNavigation';
import { setGameWinner } from '../State/Actions/App/index';

const Game: React.FunctionComponent = () => {
    const dispatch: Dispatch = useDispatch();
    const gameWinner = useSelector((state: any) => state.app.gameWinner);
    const [gameArr, setGameArr] = useState<Array<Array<number>>>([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]);

    const [currentPlayer, setCurrentPlayer] = useState<number>(1);

    const errorMessage = useSelector((state: any) => state.app.errorMessage);

    const resetBoard = () => {
        setGameArr([
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ]);
        setCurrentPlayer(1);
    }

    const handleTilePress = (row: number, column: number) => {
        if (gameArr[row][column] !== 0) {
            return;
        } else {
            let arr = gameArr.slice();
            arr[row][column] = currentPlayer;
            setGameArr(arr);

            let nextPlayer: number = (currentPlayer === 1) ? -1 : 1;
            setCurrentPlayer(nextPlayer);
        }

        let winner = checkWinner();

        if (winner === 4) {
            dispatch(setGameWinner(4))
            resetBoard();
        } else if (winner === 1) {
            dispatch(setGameWinner(1))
            resetBoard();
        } else if (winner === -1) {
            dispatch(setGameWinner(-1))
            resetBoard();
        }
    }


    const showWinner = () => {
        if (gameWinner === 4) {
            return <DialogBox text={"It's a tie!"} ></DialogBox>
        } else if (gameWinner === 1) {
            return <DialogBox text={"Player 1 wins!"} ></DialogBox>
        } else if (gameWinner === -1) {
            return <DialogBox text={"Player 2 wins!"} ></DialogBox>
        } else return null
    }

    const checkWinner = () => {
        const NUM_TILES: number = 3;
        let sum: number;

        for (let i = 0; i < NUM_TILES; i++) {
            sum = gameArr[i][0] + gameArr[i][1] + gameArr[i][2];
            if (sum === 3) { return 1; } else if (sum === -3) { return -1; }
        }

        for (let i = 0; i < NUM_TILES; i++) {
            sum = gameArr[0][i] + gameArr[1][i] + gameArr[2][i];
            if (sum === 3) { return 1; } else if (sum === -3) { return -1; }
        }

        sum = gameArr[0][0] + gameArr[1][1] + gameArr[2][2];
        if (sum === 3) { return 1; } else if (sum === -3) { return -1; }

        sum = gameArr[2][0] + gameArr[1][1] + gameArr[0][2];
        if (sum === 3) { return 1; } else if (sum === -3) { return -1; }

        let num: number = 4;
        for (let i = 0; i < NUM_TILES; i++) {
            for (let j of gameArr[i]) {
                if (j === 0) {
                    num = 0;
                }
            }
        }
        return num;
    }

    const renderIcon = (row: number, column: number) => {
        const val = gameArr[row][column];
        switch (val) {
            case 1: return <Icon name='close' style={styles.tileX} />;
            case -1: return <Icon name='circle-outline' style={styles.tileO} />;
            default: return <View />;
        }
    }

    const NextTurn = (currentPlayer === 1) ? <Icon name='close' style={styles.nextTileX} /> : <Icon name='circle-outline' style={styles.nextTileO} />;

    return (
        <View style={styles.container}>
            <Text style={styles.headingStyle}>The next turn: {NextTurn} </Text>

            <View style={styles.row}>
                <TouchableOpacity onPress={() => handleTilePress(0, 0)} style={[styles.tile, { borderLeftWidth: 0, borderTopWidth: 0 }]} >
                    {renderIcon(0, 0)}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleTilePress(0, 1)} style={[styles.tile, { borderTopWidth: 0 }]}>
                    {renderIcon(0, 1)}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleTilePress(0, 2)} style={[styles.tile, { borderRightWidth: 0, borderTopWidth: 0 }]}  >
                    {renderIcon(0, 2)}
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <TouchableOpacity onPress={() => handleTilePress(1, 0)} style={[styles.tile, { borderLeftWidth: 0 }]}>
                    {renderIcon(1, 0)}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleTilePress(1, 1)} style={[styles.tile]}>
                    {renderIcon(1, 1)}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleTilePress(1, 2)} style={[styles.tile, { borderRightWidth: 0 }]}>
                    {renderIcon(1, 2)}
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <TouchableOpacity onPress={() => handleTilePress(2, 0)} style={[styles.tile, { borderLeftWidth: 0, borderBottomWidth: 0 }]}>
                    {renderIcon(2, 0)}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleTilePress(2, 1)} style={[styles.tile, { borderBottomWidth: 0 }]}>
                    {renderIcon(2, 1)}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleTilePress(2, 2)} style={[styles.tile, { borderRightWidth: 0, borderBottomWidth: 0 }]}>
                    {renderIcon(2, 2)}
                </TouchableOpacity>
            </View>

            <Button
                color='black'
                mode='contained'
                onPress={() => resetBoard()}
                style={styles.reset}>Restart! <Icon style={styles.resetIcon} name='restore' /></Button>

            <AppLinkButton
                title='Stop playing'
                onPress={() => RootNavigation.navigate(Routes.PROFILE, null)}
                color='#636364' />
            <Text style={{ color: 'red' }}>{errorMessage || ''}</Text>
            {showWinner()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '80%',
        height: '80%',
        padding: 15,
        justifyContent: 'center',
        margin: '10%',
        alignItems: 'center'
    },
    headingStyle: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 40,
        fontWeight: 'bold'
    },
    row: {
        flexDirection: 'row'
    },
    tile: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        width: 100,
        height: 100
    },
    tileX: {
        color: 'red',
        fontSize: 80,
    },
    tileO: {
        color: 'green',
        fontSize: 70,
    },
    nextTileX: {
        color: 'red',
        fontSize: 40,
    },
    nextTileO: {
        color: 'green',
        fontSize: 30,
    },
    reset: {
        height: 40,
        width: '100%',
        maxWidth: 370,
        backgroundColor: '#6200ee',
        marginTop: 30,
    },
    resetIcon: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default Game;