import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

const StyledView: any = styled(View) <IStyleProps>`
    margin-top: ${(props: IStyleProps) => props.marginTop};
    margin-left: ${(props: IStyleProps) => props.marginLeft};
    width: 80;
    height: 80;
    align-items: center;
    justify-content: center;
    border: 2px solid red;
`;

const OneLine: any = styled(View)`
    width: 10px;
    height: 100px;
    position: absolute;
    background-color: black;
    transform: rotate(45deg);
`;

const TwoLine: any = styled(View)`
    width: 10px;
    height: 100px;
    position: absolute;
    background-color: black;
    transform: rotate(-45deg);
`;

interface IStyleProps {
    marginTop: string;
    marginLeft: string;
}

const Cross: React.FunctionComponent<IStyleProps> = ({ marginLeft, marginTop }) => (
    <StyledView marginLeft={marginLeft} marginTop={marginTop} >
        <OneLine />
        <TwoLine />
    </StyledView>
);

export default Cross;