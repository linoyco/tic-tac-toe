import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

const StyledView: any = styled(View) <IStyleProps>`
    margin-top: ${(props: IStyleProps) => props.marginTop};
    margin-left: ${(props: IStyleProps) => props.marginLeft};
    position: absolute;
`;

const OutLineCircle: any = styled(View)`
    width: 80px;
    height: 80px;
    background-color: black;
    border-radius: 40px;
`;

const InLineCircle: any = styled(View)`
    width: 60px;
    height: 60px;
    background-color: white;
    border-radius: 40px;
    margin: 10px;
`;

interface IStyleProps {
    marginTop: string;
    marginLeft: string;
}

const Circle: React.FunctionComponent<IStyleProps> = ({ marginTop, marginLeft }) => (
    <StyledView marginTop={marginTop} marginLeft={marginLeft} >
        <OutLineCircle>
            <InLineCircle />
        </OutLineCircle>
    </StyledView>

);

export default Circle;