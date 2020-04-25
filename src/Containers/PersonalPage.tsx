import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { DataTable } from 'react-native-paper';

import AppLinkButton from '../Components/AppLinkButton';
import * as Routes from '../Lib/routes';
import { loginRequest, tableRequest } from '../State/Actions/App';
import * as RootNavigation from '../Lib/RootNavigation';

const PersonalPage: React.FunctionComponent = () => {
    const dispatch: Dispatch = useDispatch();

    const loginDetails = useSelector((state: any) => state.app.loginDetails);

    let topPlayers = useSelector((state: any) => state.app.topPlayersTable);

    const errorMessage = useSelector((state: any) => state.app.errorMessage);

    useEffect(() => {
        handleTableReuqest();
    },[]);

    const mapTable = () => {
        if (topPlayers.length === 0) {
            return (<View></View>);
        } else {
            return (
                <DataTable style={styles.table}>
                    <Text style={styles.tableHeader}>Top 5 players!</Text>
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
        <View style={styles.container}>
            <Text style={styles.headingStyle}>Hello, {loginDetails.fullName}</Text>
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
            <Text style={{ color: 'red' }}>{errorMessage || ''}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '80%',
        height: '80%',
        padding: '5%',
        justifyContent: 'center',
        margin: '10%'
    },
    headingStyle: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: '20%',
        fontWeight: 'bold'
    },
    table: {
        padding: 5,
        justifyContent: 'center',
        marginBottom: '10%',

    },
    tableHeader: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: '3%',
        fontWeight: 'bold'
    },
});

export default PersonalPage;
