import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import * as routes from '../routes';
import AppLinkButton from '../Components/AppLinkButton';
import CustomInput from '../Components/CustomInput';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

const StyledView: any = styled(View)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

const StyledHeader = styled(Text)`
    font-weight: bold;
    font-size: 30px;
`;

const LoginPage = () => {
    const dispatch: Dispatch = useDispatch();

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [phone, setPhone] = useState<string>('');
    const [name, setName] = useState<string>('');
    
    return (
        <StyledView>
            <StyledHeader>LOGIN</StyledHeader>
            <CustomInput
                mode='flat'
                label='Your phone number'
            />
            <CustomInput
                mode='flat'
                label='Your name'
            />
            <AppLinkButton style={{marginTop: 100}} title='Log-in !' linkTo={`${routes.PROFILE}`} textColor='#6200ee' borderColor='#6200ee' />
        </StyledView>
    );
}

export default LoginPage;