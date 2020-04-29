import React from 'react';
import { View, StyleSheet, Text, } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { TextInput, Button } from "react-native-paper"
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
    const phoneRegExp = /^[0-9]+$/
    const SignupSchema = Yup.object().shape({
        fullName: Yup.string()
            .min(2, 'Full name must be longer than 2 characters')
            .max(50, 'Too Long!')
            .required('Required'),
        phoneNumber: Yup.string()
            .matches(phoneRegExp, "Phone number must contain only numbers")
            .length(10, "Phone number must be exactly 10 characters")
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
                        mode={'flat'}
                        style={styles.inputStyle}
                        testID={"phoneNumber-input"}
                        onChangeText={handleChange('phoneNumber')}
                        onBlur={handleBlur('phoneNumber')}
                        value={values.phoneNumber}
                        placeholder="Enter your phone Number"
                    />
                    {errors.phoneNumber && touched.phoneNumber ? (
                        <Text style={styles.errorStyle} testID={"phoneNumber-error"}>{errors.phoneNumber}</Text>
                    ) : null}
                    <TextInput
                        mode={'flat'}
                        style={styles.inputStyle}
                        testID={"fullName-input"}
                        onChangeText={handleChange('fullName')}
                        onBlur={handleBlur('fullName')}
                        value={values.fullName}
                        autoCapitalize="words"
                        placeholder="Enter your full name"
                    />
                    {errors.fullName && touched.fullName ? (
                        <Text style={styles.errorStyle} testID={"fullName-error"}>{errors.fullName}</Text>
                    ) : null}
                    <Button mode={"outlined"} style={styles.buttonStyle} testID={"submit-button"} onPress={handleSubmit}>Submit</Button>
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
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        padding: 15,
    },
    formView: {
        width: '80%',
        height: '70%',
        marginTop: '5%',
        marginBottom: 'auto',
    },
    headingStyle: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: '20%',
        fontWeight: 'bold'
    }, buttonStyle: {
        width: '100%',
        marginBottom: '2%',
        marginTop: '2%',
        maxWidth: 370
    }, inputStyle: {
        backgroundColor: 'white'
    }, errorStyle: {
        marginBottom: '2%',
        marginTop: '2%',
        maxWidth: 370,
        color: "red"
    }
});

export default LoginPage;