import { watchTableRequest, tableRequestFlow } from "../src/State/Sagas/app";
import { take, call } from "redux-saga/effects";
import { LOGIN_REQUEST, TABLE_REQUEST } from "../src/State/Actions/App/types";

describe("table request", () => {
    const getObject = watchTableRequest();
    it("Should take TABLE_REQUEST ", () => {
        expect(getObject.next().value).toEqual(take(TABLE_REQUEST));
    });
    it("Should call tableRequestFlow ", () => {
        const loginDetails = {
            fullName: "Chen",
            phoneNumber: "0502009298",
        };
        expect(getObject.next().value).toEqual(
            call(tableRequestFlow, loginDetails)
        );
    });
    it("Should be done", () => {
        expect(getObject.next().done).toEqual(true);
    });
});
