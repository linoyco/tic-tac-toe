import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import FormBuilder from 'react-native-paper-form-builder';
import { useForm } from 'react-hook-form';

import { loginRequest } from '../State/Actions/App/index';
import AppLinkButton from '../Components/AppLinkButton';

export interface ILoginDetails {
    phoneNumber: string;
    fullName: string;
}

const LoginPage: React.FunctionComponent = () => {

    const dispatch: Dispatch = useDispatch();

    const errorMessage = useSelector((state: any) => state.app.errorMessage);

    const form = useForm<ILoginDetails>({
        defaultValues: {
            phoneNumber: '',
            fullName: '',
        },
        mode: 'onChange',
    });

    const handleLogin = (loginDetails: ILoginDetails) => {
        dispatch(loginRequest(loginDetails));
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headingStyle}>LOGIN</Text>

            <FormBuilder
                form={form}
                formConfigArray={[
                    {
                        type: 'input',
                        variant: 'outlined',
                        name: 'phoneNumber',
                        label: 'Your phone number',
                        rules: {
                            minLength: {
                                value: 10,
                                message: 'Phone number is min 10 numbers'
                            },
                            required: {
                                value: true,
                                message: 'Phone number is required',
                            },
                        },
                        textInputProps: {
                            textContentType: 'telephoneNumber',
                            keyboardType: 'phone-pad',
                            style: { backgroundColor: 'white' },
                        },
                    },
                    {
                        type: 'input',
                        variant: 'outlined',
                        name: 'fullName',
                        label: 'Your full name',
                        rules: {
                            required: {
                                value: true,
                                message: 'Full name is required',
                            },
                        },
                        textInputProps: {
                            textContentType: 'username',
                            keyboardType: 'default',
                            autoCapitalize: 'sentences',
                            style: { backgroundColor: 'white' },
                        },
                    },
                ]}>
                <AppLinkButton
                    title='Log-in'
                    color='#6200ee'
                    onPress={form.handleSubmit((data: ILoginDetails) => handleLogin(data))} />
            </FormBuilder>
            <Text style={{ color: 'red' }}>{errorMessage || ''}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '80%',
        height: '80%',
        padding: '5%',
        justifyContent: 'center',
        margin: '10%'
    },
    headingStyle: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: '20%',
        fontWeight: 'bold'
    },
});

export default LoginPage;