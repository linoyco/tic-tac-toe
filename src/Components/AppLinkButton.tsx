import React from 'react';
import { Button } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

interface IProps {
    title: string;
    color?: string;
    style?: any;
    onPress?: any;
}

const AppLinkButton: React.FunctionComponent<IProps> = ({ title, color, style, onPress }) => (
    <View style={styles.container} >
        <Button onPress={onPress} color={color} mode={'contained'} style={[style, styles.buttonStyle]}>{title}</Button>
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
    }
});


export default AppLinkButton;