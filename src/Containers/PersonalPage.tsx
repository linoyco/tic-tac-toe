import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import AppLinkButton from '../Components/AppLinkButton';
import * as routes from '../routes';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { loginRequest } from '../State/Actions/App';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';

const StyledView: any = styled(View)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 100%;
`;

const StyledHeader = styled(Text)`
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 40%;
`;

const PersonalPage: React.FunctionComponent = () => {
    const dispatch: Dispatch = useDispatch();

    const name = useSelector((state: any) => state.app.loginDetails.fullName);

    useEffect(() => {
        console.log('from useEffect', name);
    });

    const handleLogOut = () => {
        dispatch(loginRequest({ phoneNumber: '', fullName: '' }));
    }

    return (
        <StyledView>
            <StyledHeader>Hello, {name}</StyledHeader>
            <AppLinkButton
                title='Start to play !'
                linkTo={`${routes.GAME}`}
                color='#A6F2A6'
            />
            <AppLinkButton
                title='Log out'
                linkTo={`${routes.HOME}`}
                color='#636364'
                onPress={() => handleLogOut()}
            />
        </StyledView>
    );
}
export default PersonalPage;