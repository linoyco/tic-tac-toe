import reducer from "../src/State/Reducers/app";
import * as types from "../src/State/Actions/App/types";
import demoTable from "../src/Lib/demoTable";


describe("app reducer", () => {
    it("should return the initial state", () => {
        expect(reducer(undefined, {})).toEqual({
            loginDetails: {
                phoneNumber: "",
                fullName: "",
            },
            topPlayersTable: [],
        });
    });
    const loginDetails = { fullName: "lil", phoneNumber: "" };
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
                fullName: "lil",
            },
        });
    });

    it("should handle TABLE_REQUEST", () => {
        expect(
            reducer(
                {},
                {
                    type: types.TABLE_REQUEST,
                    topPlayersTable: demoTable,
                }
            )
        ).toEqual({
            topPlayersTable: [
                {
                    fullName: "chen",
                    phoneNumber: "0502009298",
                    numberOfWins: 10,
                },
                {
                    fullName: "chen",
                    phoneNumber: "0502009298",
                    numberOfWins: 10,
                },
                {
                    fullName: "chen",
                    phoneNumber: "0502009298",
                    numberOfWins: 10,
                },
            ],
        });
    });
});
