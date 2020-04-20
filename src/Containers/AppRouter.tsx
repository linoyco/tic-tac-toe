import React from 'react';
import { NativeRouter } from "react-router-native";
import * as routes from '../routes';
import HomePage from './HomePage';
import Game from './Game';
import LoginPage from './LoginPage';

var Route = require("react-router-native").Route;

const AppRouter = () => (
    <NativeRouter>
        <Route exact path={routes.LOGIN} component={LoginPage} />
        <Route exact path={routes.HOME} component={HomePage} />
        <Route path={routes.GAME} component={Game} />
    </NativeRouter>
);

export default AppRouter;
