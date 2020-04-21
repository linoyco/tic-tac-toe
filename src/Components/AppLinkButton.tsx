import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-native";
import { View, Text } from "react-native";

interface IStyleProps {
    borderColor?: string;
    textColor?: string;
}

const StyledButton: any = styled(View) <IStyleProps>`
    margin-bottom: 15%;
    border: 2px solid ${(props: IStyleProps) => props.borderColor || 'black'};
    border-radius: 10px;
    padding: 10px;
`;

const StyledHeader: any = styled(Text) <IStyleProps>`
    font-weight: bold;
    font-size: 15px;
    margin: 5px;
    color: ${(props: IStyleProps) => props.textColor || 'black'};
`;

interface IProps {
    title: string;
    linkTo?: string;
    borderColor?: string;
    textColor?: string;
    style?: any;
}

const AppLinkButton: React.FunctionComponent<IProps> = ({ title, borderColor, linkTo = '', textColor, style }) => (
    <Link to={linkTo} style={style}>
        <StyledButton borderColor={borderColor}>
            <StyledHeader textColor={textColor}>{title}</StyledHeader>
        </StyledButton>
    </Link>
);

export default AppLinkButton;