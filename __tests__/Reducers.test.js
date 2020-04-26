import reducer from "../src/State/Reducers/app";
import * as types from "../src/State/Actions/App/types";
import * as consts from "./Consts"
const topPlayersTable = consts.topPlayersTable
describe("app reducer", () => {
    it("should return the initial state", () => {
        expect(reducer(undefined, {})).toEqual({
            loginDetails: {
                phoneNumber: "",
                fullName: "",
            },
            topPlayersTable: [],
            errorMessage: "",
        });
    });
    const loginDetails = { fullName: "", phoneNumber: "" };
    it("should handle LOGIN_REQUEST", () => {
        expect(
            reducer(
                {},
                {
                    type: types.LOGIN_REQUEST,
                    loginDetails: loginDetails,
                }
            )
        ).toEqual({
            loginDetails: {
                phoneNumber: "",
                fullName: "",
            },
        });
    });
    it("should handle TABLE_REQUEST", () => {
        expect(
            reducer(
                {},
                {
                    type: types.TABLE_REQUEST,
                    topPlayersTable: topPlayersTable,
                }
            )
        ).toEqual({
            topPlayersTable: consts.topPlayersTable
        });
    });
});
