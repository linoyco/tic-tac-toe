import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import FormBuilder from 'react-native-paper-form-builder';
import { useForm } from 'react-hook-form';

import * as Routes from '../Lib/routes';
import { loginRequest } from '../State/Actions/App/index';
import AppLinkButton from '../Components/AppLinkButton';

export interface ILoginDetails {
    phoneNumber: string;
    fullName: string;
}

const LoginPage: React.FunctionComponent = () => {

    const dispatch: Dispatch = useDispatch();

    const form = useForm({
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
        <View style={styles.containerStyle}>
            <ScrollView contentContainerStyle={styles.scrollViewStyle}>
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
                                required: {
                                    value: true,
                                    message: 'Phone number is required',
                                },
                            },
                            textInputProps: {
                                keyboardType: 'number-pad',
                                autoCapitalize: 'none',
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
                                keyboardType: 'default',
                                autoCapitalize: 'words',
                                style: { backgroundColor: 'white' },
                            },
                        },
                    ]}>
                    <AppLinkButton
                        title='Log-in'
                        color='#6200ee'
                        onPress={form.handleSubmit((data: ILoginDetails) => handleLogin(data))} />
                </FormBuilder>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        width: '80%',
    },
    scrollViewStyle: {
        flex: 1,
        padding: 15,
        justifyContent: 'center',
    },
    headingStyle: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 40,
        fontWeight: 'bold'
    },
});

export default LoginPage;