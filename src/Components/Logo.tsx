import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Logo = () => (
    <View style={styles.outOutView}>
        <View style={styles.outView}>
            <View style={styles.container}>
                <Icon name='close' style={styles.logoX} />
                <Text style={styles.textStyle}>VS</Text>
                <Icon name='circle-outline' style={styles.logoO} />
            </View>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        padding: 10,
    },
    logoX: {
        color: 'red',
        fontSize: 50,
    },
    logoO: {
        color: 'green',
        fontSize: 40,
    },
    outView: {
        padding: 0,
        borderWidth: 2,
        borderColor: 'yellow',
        borderRadius: 5,
    },
    outOutView: {
        padding: 0,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 30,
        marginRight: '10%',
        marginLeft: '10%'
    }
});

export default Logo;