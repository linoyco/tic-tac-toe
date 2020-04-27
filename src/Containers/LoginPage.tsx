import React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { loginRequest } from '../State/Actions/App/index';
export interface ILoginDetails {
    phoneNumber: string;
    fullName: string;
}

const LoginPage: React.FunctionComponent = () => {

    const dispatch: Dispatch = useDispatch();

    const errorMessage = useSelector((state: any) => state.app.errorMessage);
    const handleLogin = (loginDetails: ILoginDetails) => {
        dispatch(loginRequest(loginDetails));
    }

    const SignupSchema = Yup.object().shape({
        fullName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        phoneNumber: Yup.string()
            .min(10, 'Too Short!')
            .max(10, 'Too Long!')
            .required('Required'),
    });

    const form = () => (
        <Formik
            initialValues={{ phoneNumber: '', fullName: '' }}
            onSubmit={(values) => {
                handleLogin(values)
            }}
            validationSchema={SignupSchema}
        >
            {({ errors, touched, handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                    <TextInput
                        testID={"phoneNumber-input"}
                        onChangeText={handleChange('phoneNumber')}
                        onBlur={handleBlur('phoneNumber')}
                        value={values.phoneNumber}
                        placeholder="Enter your phone Number"
                    />
                    {errors.phoneNumber && touched.phoneNumber ? (
                        <Text testID={"phoneNumber-error"}>{errors.phoneNumber}</Text>
                    ) : null}
                    <TextInput
                        testID={"fullName-input"}
                        onChangeText={handleChange('fullName')}
                        onBlur={handleBlur('fullName')}
                        value={values.fullName}
                        autoCapitalize="words"
                        placeholder="Enter your full name"
                    />
                    {errors.fullName && touched.fullName ? (
                        <Text testID={"fullName-error"}>{errors.fullName}</Text>
                    ) : null}
                    <Button testID={"submit-button"} onPress={handleSubmit} title="Submit" />
                </View>
            )}
        </Formik>
    );
    return (
        <View style={styles.container}>
            <Text style={styles.headingStyle}>LOGIN</Text>
            {form()}
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