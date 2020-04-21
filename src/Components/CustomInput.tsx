import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextInput from 'react-native-paper/src/components/TextInput/TextInput';

interface IProps {
    label?: string;
    mode: "flat" | "outlined";
    style?: any;
}

const CustomInput: React.FunctionComponent<IProps> = ({ label, mode, style }) => (
    <View style={styles.container}>
        <TextInput
            mode={mode}
            label={label}
            style={style || { height: 60, width: '70%', backgroundColor: 'white' }}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        margin: 10
    },
});

export default CustomInput;