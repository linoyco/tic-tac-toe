import React from 'react';
import { NativeRouter } from "react-router-native";

import * as routes from '../routes';
import App from './App';
import GameBoard from '../Components/GameBoard';

var Route = require("react-router-native").Route;


const AppRouter = () => (
    <NativeRouter>
        <Route exact path={routes.HOME} component={App} />
        <Route path={routes.GAME_BOARD} component={GameBoard} />
    </NativeRouter>
);

export default AppRouter;
