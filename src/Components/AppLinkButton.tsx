import React from 'react';
import { Button } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

interface IProps {
    title: string;
    color?: string;
    onPress?: any;
    testID?: string;
}

const AppLinkButton: React.FunctionComponent<IProps> = ({ title, color, onPress, testID }) => (
    <View style={styles.container} >
        <Button testID={testID} onPress={onPress} color={color} mode={'contained'} style={styles.buttonStyle}>{title}</Button>
    </View>
);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    buttonStyle: {
        width: '100%',
        marginBottom: '2%',
        marginTop: '2%',
        maxWidth: 370
    }
});

export default AppLinkButton;