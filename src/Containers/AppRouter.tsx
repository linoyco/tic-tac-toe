import React from 'react';
import { NativeRouter } from "react-router-native";
import * as routes from '../routes';
import Index from './Index';
import Game from './Game';

var Route = require("react-router-native").Route;

const AppRouter = () => (
    <NativeRouter>
        <Route exact path={routes.HOME} component={Index} />
        <Route path={routes.GAME} component={Game} />
    </NativeRouter>
);

export default AppRouter;
