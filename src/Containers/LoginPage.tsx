// const LoginPage = () => {
//     const dispatch: Dispatch = useDispatch();

//     const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
//     const [phone, setPhone] = useState<string>('');
//     const [name, setName] = useState<string>('');

//     return (
//         // <StyledView>
//         //     <StyledHeader>LOGIN</StyledHeader>

//         //         <CustomInput
//         //             mode='flat'
//         //             label='Your phone number'
//         //         />
//         //         <CustomInput
//         //             mode='flat'
//         //             label='Your name'
//         //         />
//         //     <AppLinkButton style={{ marginTop: 100 }} title='Log-in !' linkTo={`${routes.PROFILE}`} textColor='#6200ee' borderColor='#6200ee' />
//         // </StyledView>
//     );
// }

import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import FormBuilder from 'react-native-paper-form-builder';
import { useForm } from 'react-hook-form';
import { Button } from 'react-native-paper';

interface ILoginDetails {
    phoneNumber: string;
    fullName: string;
}

const LoginPage: React.FunctionComponent = () => {

    const dispatch: Dispatch = useDispatch();

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [phone, setPhone] = useState<string>('');
    const [name, setName] = useState<string>('');


    const form = useForm({
        defaultValues: {
            phoneNumber: '',
            fullName: '',
        },
        mode: 'onChange',
    });

    return (
        <View style={styles.containerStyle}>
            <ScrollView contentContainerStyle={styles.scrollViewStyle}>
                <Text style={styles.headingStyle}>LOGIN</Text>

                <FormBuilder
                    form={form}
                    formConfigArray={[
                        {
                            type: 'input',
                            name: 'phoneNumber',
                            label: 'Your phone number',
                            rules: {
                                required: {
                                    value: true,
                                    message: 'Phone number is required',
                                },
                            },
                            textInputProps: {
                                keyboardType: 'phone-pad',
                                autoCapitalize: 'none',
                            },
                        },
                        {
                            type: 'input',
                            name: 'fullName',
                            label: 'Your full name',
                            rules: {
                                required: {
                                    value: true,
                                    message: 'Full name is required',
                                },
                            },
                            textInputProps: {
                                // secureTextEntry: true,
                                keyboardType: 'name-phone-pad',
                                autoCapitalize: 'none',
                            },
                        },
                    ]}>
                    <Button
                        mode={'contained'}
                        onPress={form.handleSubmit((data: ILoginDetails) => {
                            console.log('login details: ', data);
                        })}>Log-in</Button>
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