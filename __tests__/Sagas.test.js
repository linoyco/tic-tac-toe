import { watchTableRequest, tableRequestFlow, watchLoginRequest,loginRequestFlow,logoutRequestFlow, watchLogoutRequest } from "../src/State/Sagas/app";
import { take, call } from "redux-saga/effects";
import { LOGIN_REQUEST, TABLE_REQUEST, LOGOUT_REQUEST } from "../src/State/Actions/App/types";
import * as consts from "./Consts"
describe("table request", () => {
    const getObject = watchTableRequest();
    it("Should take TABLE_REQUEST ", () => {
        expect(getObject.next().value).toEqual(take(TABLE_REQUEST));
    });
    it("Should call tableRequestFlow ", () => {
        
        expect(getObject.next().value).toEqual(
            call(tableRequestFlow,undefined)
        );
    });
});

describe("login request",()=>{
    const getObject = watchLoginRequest();
    it("Should take LOGIN_REQUEST", () => {
        expect(getObject.next().value).toEqual(take(LOGIN_REQUEST));
    });
    it("Should call loginRequestFlow ", () => {
        
        expect(getObject.next().value).toEqual(
            call(loginRequestFlow,undefined)
        );
    });
})

describe("logout request",()=>{
    const getObject = watchLogoutRequest();
    it("Should take LOGOUT_REQUEST", () => {
        expect(getObject.next().value).toEqual(take(LOGOUT_REQUEST));
    });
    it("Should call logoutRequestFlow ", () => {
        expect(getObject.next().value).toEqual(
            call(logoutRequestFlow)
        );
    });
})

