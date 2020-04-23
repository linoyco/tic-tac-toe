import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Dispatch } from 'redux';
import { DataTable } from 'react-native-paper';

import AppLinkButton from '../Components/AppLinkButton';
import * as Routes from '../Lib/routes';
import { loginRequest, tableRequest } from '../State/Actions/App';
import * as RootNavigation from '../Lib/RootNavigation';

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

    const loginDetails = useSelector((state: any) => state.app.loginDetails);

    let topPlayers = useSelector((state: any) => state.app.topPlayersTable);

    useEffect(() => {
        handleTableReuqest();
    });

    const mapTable = () => {
        if (topPlayers.length === 0) {
            return (<View></View>);
        } else {
            return (
                <DataTable>
                    <Text>Top 5 players!</Text>
                    <DataTable.Header>
                        <DataTable.Title>Name</DataTable.Title>
                        <DataTable.Title numeric>Phone Number</DataTable.Title>
                        <DataTable.Title numeric>Wins</DataTable.Title>
                    </DataTable.Header>
                    {topPlayers.map((player, idx) => (
                        <DataTable.Row key={idx}>
                            <DataTable.Cell>{player.fullName}</DataTable.Cell>
                            <DataTable.Cell>{player.phoneNumber}</DataTable.Cell>
                            <DataTable.Cell numeric={true}>
                                {player.numberOfWins}
                            </DataTable.Cell>
                        </DataTable.Row>
                    ))}
                </DataTable>);
        }
    }

    const handleLogOut = () => {
        dispatch(loginRequest({ phoneNumber: '', fullName: '' }));
        RootNavigation.navigate(Routes.HOME, null);
    };

    const handleTableReuqest = () => {
        dispatch(tableRequest(loginDetails));
    };

    return (
        <StyledView>
            <StyledHeader>Hello, {loginDetails.fullName}</StyledHeader>
            {mapTable()}
            <AppLinkButton
                title="Start to play !"
                onPress={() => RootNavigation.navigate(Routes.GAME, null)}
                color="#A6F2A6"
            />
            <AppLinkButton
                title="Log out"
                color="#636364"
                onPress={() => handleLogOut()}
            />
        </StyledView>
    );
};
export default PersonalPage;
