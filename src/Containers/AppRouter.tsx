import React from 'react';
import { NativeRouter } from "react-router-native";
import * as routes from '../routes';
import HomePage from './HomePage';
import Game from './Game';
import LoginPage from './LoginPage';
import PersonalPage from './PersonalPage';

var Route = require("react-router-native").Route;

const AppRouter = () => (
    <NativeRouter>
        <Route exact path={routes.HOME} component={HomePage} />
        <Route path={routes.LOGIN} component={LoginPage} />
        <Route path={routes.PROFILE} component={PersonalPage} />
        <Route path={routes.GAME} component={Game} />
    </NativeRouter>
);

export default AppRouter;
