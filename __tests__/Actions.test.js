import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import LoginPage from "../src/Containers/LoginPage";
import * as actions from "../src/State/Actions/App/index";
import * as types from "../src/State/Actions/App/types";
import * as consts from "./Consts"

describe("actionsLogin", () => {
    it("should create an action to login", () => {
        const loginDetails = { fullName: "Chen", phoneNumber: "0502009298" };
        const expectedAction = {
            type: types.LOGIN_REQUEST,
            loginDetails,
        };
        expect(actions.loginRequest(loginDetails)).toEqual(expectedAction);
    });
});
describe("actionsTable", () => {
    it("should create an action to request Table from server", () => {
        const loginDetails = { fullName: "chen", phoneNumber: "0502009298" };
        const topPlayersTable = consts.topPlayersTable
        const expectedAction = {
            type: types.TABLE_REQUEST,
            loginDetails,
            topPlayersTable
        };
        expect(actions.tableRequest(loginDetails, topPlayersTable)).toEqual(expectedAction);
    });
});

describe("action logoutRequest", () => {
    it("should create an action to request logout", () => {
        const expectedAction = {
            type: types.LOGOUT_REQUEST,
        };
        expect(actions.logoutRequest()).toEqual(expectedAction);
    });
});

describe("action gameWinner", () => {
    it("should create an action to set the game winner", () => {
        const expectedAction = {
            type: types.GAME_WINNER,
            gameWinner: 1
        };
        expect(actions.setGameWinner(1)).toEqual(expectedAction);
    });
});


