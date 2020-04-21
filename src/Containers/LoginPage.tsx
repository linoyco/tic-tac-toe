import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import * as routes from '../routes';
import AppLinkButton from '../Components/AppLinkButton';
import CustomInput from '../Components/CustomInput';

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
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    
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
            <AppLinkButton style={{marginTop: 100}} title='Log-in !' linkTo={`${routes.PROFILE}`} textColor='green' borderColor='green' />
        </StyledView>
    );
}

export default LoginPage;