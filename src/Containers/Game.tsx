import React, { useState } from 'react';
import { View, TouchableOpacity, GestureResponderEvent, StyleSheet } from 'react-native';
import * as routes from '../routes';
import AppButton from '../Components/AppButton';
import styled from 'styled-components';
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons';

const StyledView: any = styled(View)`
    margin-bottom: 15%;
    margin-top: auto;
`;

const Game: React.FunctionComponent = () => {

    const [gameArr, setGameArr] = useState<Array<Array<number>>>([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]);
    const [currentPlayer, setCurrentPlayer] = useState<number>(1);

    const handleTilePress = (row: number, column: number) => {

        let arr = gameArr.slice();
        arr[row][column] = currentPlayer;
        setGameArr(arr);

        let nextPlayer: number = (currentPlayer === 1) ? -1 : 1;
        setCurrentPlayer(nextPlayer);
    }

    const renderIcon = (row: number, column: number) => {
        const val = gameArr[row][column];
        switch (val) {
            case 1: return <Icon name='close' style={styles.tileX} />;
            case -1: return <Icon name='circle-outline' style={styles.tileO} />;
            default: return <View />;
        }
    }

    return (
        <View style={styles.container}>

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

            <StyledView>
                <AppButton title='Stop playing' linkTo={routes.HOME} textColor='red' borderColor='red' />
            </StyledView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100 %',
        marginTop: 120,
        marginBottom: 'auto'
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
    }
});

export default Game;