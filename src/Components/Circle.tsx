import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

const OutLineCircle: any = styled(View)`
    width: 80px;
    height: 80px;
    background-color: black;
    border-radius: 40px;
    margin: 10px
`;

const InLineCircle: any = styled(View)`
    width: 60px;
    height: 60px;
    background-color: white;
    border-radius: 40px;
    margin: 10px
`;

const Circle: React.FunctionComponent = () => (
    <OutLineCircle>
        <InLineCircle/>
    </OutLineCircle>
);

export default Circle;