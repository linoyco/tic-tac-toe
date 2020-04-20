import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import * as routes from '../routes';
import AppLinkButton from '../Components/AppLinkButton';

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
    margin-top: 10%;
    margin-bottom: 90%;
`;
const LoginPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    return (
        <StyledView>
            {/* <StyledHeader>LOGIN</StyledHeader> */}
            <Text>LOGIN</Text>
            <AppLinkButton title='Log-in !' linkTo={`${routes.PROFILE}`} textColor='green' borderColor='green' />
        </StyledView>
    );
}

export default LoginPage;