import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Alert, Text, ScrollView } from 'react-native';
import * as routes from '../routes';
import AppLinkButton from '../Components/AppLinkButton';
// import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-paper';

const Game: React.FunctionComponent = () => {

    const [gameArr, setGameArr] = useState<Array<Array<number>>>([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]);
    const [currentPlayer, setCurrentPlayer] = useState<number>(1);

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
        if (winner === 1) {
            Alert.alert('player 1 is winner !');
            resetBoard();
        } else if (winner === -1) {
            Alert.alert('player 2 is winner !');
            resetBoard();
        }
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

        return 0;
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
            <ScrollView>
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

                <Button color='black' mode='contained' onPress={() => resetBoard()} style={styles.reset}>Restart! <Icon style={styles.resetIcon} name='restore' /></Button>
                <AppLinkButton title='Stop playing' linkTo={routes.PROFILE} color='#636364' />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
    },
    scrollViewStyle: {
        padding: 15,
        justifyContent: 'center',
    },
    headingStyle: {
        fontSize: 30,
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
        borderWidth: 2,
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
        backgroundColor: '#6200ee',
        marginTop: 30,
    },
    resetIcon: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default Game;