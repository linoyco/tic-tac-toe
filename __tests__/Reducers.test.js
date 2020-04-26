import reducer from "../src/State/Reducers/app";
import * as types from "../src/State/Actions/App/types";
const demoTable = [
    {
        rank: "1",
        fullName: "Linoy Cohen",
        numberOfWins: 10,
    },
    {
        rank: "2",
        fullName: "Chen Ben Ami",
        numberOfWins: 9,
    },
    {
        rank: "3",
        fullName: "Other guy 1",
        numberOfWins: 5,
    },
    {
        rank: "4",
        fullName: "Other guy 2",
        numberOfWins: 4,
    },
    {
        rank: "5",
        fullName: "Other guy 3",
        numberOfWins: 0,
    },
];
describe("app reducer", () => {
    it("should return the initial state", () => {
        expect(reducer(undefined, {})).toEqual({
            loginDetails: {
                phoneNumber: "",
                fullName: "",
            },
            topPlayersTable: [],
            errorMessage:""
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
                    rank: "1",
                    fullName: "Linoy Cohen",
                    numberOfWins: 10,
                },
                {
                    rank: "2",
                    fullName: "Chen Ben Ami",
                    numberOfWins: 9,
                },
                {
                    rank: "3",
                    fullName: "Other guy 1",
                    numberOfWins: 5,
                },
                {
                    rank: "4",
                    fullName: "Other guy 2",
                    numberOfWins: 4,
                },
                {
                    rank: "5",
                    fullName: "Other guy 3",
                    numberOfWins: 0,
                },
            ],
        });
    });
});
