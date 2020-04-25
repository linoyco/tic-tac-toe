import React from 'react';
import { Button } from 'react-native-paper';
import { View } from 'react-native';

interface IStyleProps {
    color?: string;
}

// const StyledButton: any = styled(Button) <IStyleProps>`
//     font-size: 20px;
//     margin-top: 10px;
//     margin-bottom: 10px;
//     width: 100%;
//     height: 40px;
//     background-color: ${(props: IStyleProps) => props.color || '#6200ee'};
// `;

interface IProps {
    title: string;
    color?: string;
    style?: any;
    onPress?: any;
}

const AppLinkButton: React.FunctionComponent<IProps> = ({ title, color, style, onPress }) => (
    <View style={{ width: '100%' }} >
        <Button onPress={onPress} color={color} mode={'contained'} style={style}>{title}</Button>
    </View>
);

export default AppLinkButton;