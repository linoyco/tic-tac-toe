import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, GestureResponderEvent, StyleSheet } from 'react-native';
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

    

    return (
        <View style={styles.container}>
            {/* <TouchableWithoutFeedback onPress={(e: GestureResponderEvent) => handleTouch(e)}> */}

            <View style={styles.row}>
                <View style={[styles.tile, { borderLeftWidth: 0, borderTopWidth: 0 }]} >
                    <Icon name='close' style={styles.tileX} />
                </View>
                <View style={[styles.tile, { borderTopWidth: 0 }]}>
                    <Icon name='circle-outline' style={styles.tileO} />
                </View>
                <View style={[styles.tile, { borderRightWidth: 0, borderTopWidth: 0 }]}  ></View>
            </View>

            <View style={styles.row}>
                <View style={[styles.tile, { borderLeftWidth: 0 }]}  ></View>
                <View style={[styles.tile]}  ></View>
                <View style={[styles.tile, { borderRightWidth: 0 }]}  ></View>
            </View>

            <View style={styles.row}>
                <View style={[styles.tile, { borderLeftWidth: 0, borderBottomWidth: 0 }]}  ></View>
                <View style={[styles.tile, { borderBottomWidth: 0 }]}  ></View>
                <View style={[styles.tile, { borderRightWidth: 0, borderBottomWidth: 0 }]}  ></View>
            </View>

            {/* </TouchableWithoutFeedback> */}
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
        fontSize: 80,
    }
});

export default Game;