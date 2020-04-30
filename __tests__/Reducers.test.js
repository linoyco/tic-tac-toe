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
            gameWinner: 0
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
    it("should handle LOGOUT_REQUEST", () => {
        expect(
            reducer(
                {},
                {
                    type: types.LOGOUT_REQUEST
                }
            )
        ).toEqual({
            errorMessage: "",
            loginDetails: {
                fullName: "",
                phoneNumber: ""
            },
            topPlayersTable: []
        });
    });
    it("should handle ERROR_MESSAGE", () => {
        expect(
            reducer(
                {},
                {
                    type: types.ERROR_MESSAGE,
                    errorMessage: "error",
                }
            )
        ).toEqual({
            errorMessage: undefined
        });
    });
    it("should handle GAME_WINNER", () => {
        expect(reducer({}, {
            type: types.GAME_WINNER,
            gameWinner: 1
        }
        )
        ).toEqual({ gameWinner: 1 });
    });
});
