import React from 'react';
import { Link } from "react-router-native";
import { Button } from 'react-native-paper';
import styled from "styled-components";

interface IStyleProps {
    color?: string;
}

const StyledButton: any = styled(Button) <IStyleProps>`
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    height: 40px;
    background-color: ${(props: IStyleProps) => props.color || '#6200ee'};
`;

interface IProps {
    title: string;
    linkTo?: string;
    color?: string;
    style?: any;
    onPress?: any;
}

const AppLinkButton: React.FunctionComponent<IProps> = ({ title, color, linkTo = '', style, onPress }) => (
    <Link to={linkTo} style={{ width: '100%' }}>
        <StyledButton onPress={onPress} color={color} mode={'contained'} style={style || ''}>{title}</StyledButton>
    </Link>
);

export default AppLinkButton;