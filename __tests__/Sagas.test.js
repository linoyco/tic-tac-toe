import { watchTableReuqest,tableRequestFlow } from "../src/State/Sagas/app";
import { take, call } from "redux-saga/effects";
import { LOGIN_REQUEST, TABLE_REQUEST } from "../src/State/Actions/App/types";
describe("login request", () => {
    const getObject = watchTableReuqest();
    it("Should take TABLE_REQUEST ", () => {
        expect(getObject.next().value).toEqual(
            take(TABLE_REQUEST)
        );
    });
    it("Should call tableRequestFlow ", () => {
        expect(getObject.next().value).toEqual(
            call(tableRequestFlow)
        );
    });
});
