import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { DataTable, ActivityIndicator, Colors } from 'react-native-paper';

import AppLinkButton from '../Components/AppLinkButton';
import * as Routes from '../Lib/routes';
import { tableRequest, logoutRequest } from '../State/Actions/App';
import * as RootNavigation from '../Lib/RootNavigation';

const PersonalPage: React.FunctionComponent = () => {
    const dispatch: Dispatch = useDispatch();

    const loginDetails = useSelector((state: any) => state.app.loginDetails);
    const loading = useSelector((state: any) => state.app.loading);
    let topPlayers = useSelector((state: any) => state.app.topPlayersTable);

    const errorMessage = useSelector((state: any) => state.app.errorMessage);

    useEffect(() => {
        handleTableReuqest();
    }, []);

    const mapTable = () => {
        if (topPlayers.length === 0) {
            return <View></View>;
        } else if (loading) {
            <Text style={styles.tableHeader}>Loading data...</Text>;
            return <ActivityIndicator animating={true} color={Colors.red800} />;
        } else {
            return (<DataTable style={styles.table}>
                <Text style={styles.tableHeader}>Top 5 players!</Text>
                <DataTable.Header >
                    <DataTable.Title sortDirection="ascending" style={{ justifyContent: 'center' }} >Rank</DataTable.Title>
                    <DataTable.Title style={{ justifyContent: 'center', flex: 2.8 }} >Full Name</DataTable.Title>
                    <DataTable.Title numeric style={{ justifyContent: 'center' }}>Wins</DataTable.Title>
                </DataTable.Header>
                {topPlayers.map((player, idx) => (
                    <DataTable.Row key={idx}>
                        <DataTable.Cell style={{ justifyContent: 'center' }}>{player.rank}</DataTable.Cell>
                        <DataTable.Cell style={{ justifyContent: 'center', flex: 2.8 }} >{player.fullName}</DataTable.Cell>
                        <DataTable.Cell numeric={true} style={{ justifyContent: 'center' }}>
                            {player.numberOfWins}
                        </DataTable.Cell>
                    </DataTable.Row>
                ))}
            </DataTable>);
        }
    };

    const handleLogOut = () => {
        dispatch(logoutRequest());
    };

    const handleTableReuqest = () => {
        dispatch(tableRequest(loginDetails, []));
    };

    return (
        <View style={styles.container}>
                <Text style={styles.headingStyle}>Hello, {loginDetails.fullName}</Text>
                <View style={{ width: '95%', marginBottom:0, marginTop:'auto' }}>
                {mapTable()}
                </View>
                <View style={{ width: '80%', marginBottom:0, marginTop:'auto' }}>
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
                </View>
                <Text style={{ color: 'red' }}>{errorMessage || ''}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        height: '100%',
        padding: 15,
    },
    headingStyle: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',

    },
    table: {
        padding: 5,
        justifyContent: 'center',
    },
    tableHeader: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
    },
});

export default PersonalPage;
