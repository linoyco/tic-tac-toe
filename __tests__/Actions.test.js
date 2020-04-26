import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import LoginPage from "../src/Containers/LoginPage";
import * as actions from "../src/State/Actions/App/index";
import * as types from "../src/State/Actions/App/types";

describe("actionsLogin", () => {
    it("should create an action to login", () => {
        const loginDetails = { fullName: "chen", phoneNumber: "0502009298" };
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
        const expectedAction = {
            type: types.TABLE_REQUEST,
            loginDetails,
        };
        expect(actions.tableRequest(loginDetails)).toEqual(expectedAction);
    });
});
