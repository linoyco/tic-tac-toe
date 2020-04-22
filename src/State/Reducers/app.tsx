import produce from "immer";
import {
    AppActionTypes,
    LOGIN_REQUEST,
    TABLE_REQUEST,
} from "../Actions/App/types";
import {demoTable} from "../../demoTable"
export interface IPlayerStats {
    fullName: string;
    phoneNumber: string;
    numberOfWins: number;
}

export interface IAppState {
    readonly loginDetails: {
        phoneNumber: string;
        fullName: string;
    };
    readonly topPlayersTable: Array<IPlayerStats>;
}

const initialState: IAppState = {
    loginDetails: {
        phoneNumber: "",
        fullName: "",
    },
    topPlayersTable: [],
};

export function appReducer(
    state: IAppState = initialState,
    action: AppActionTypes
) {
    return produce(state, (draft) => {
        switch (action.type) {
            case LOGIN_REQUEST:
                draft.loginDetails = action.loginDetails;
                console.log("from reducer ", draft.loginDetails);
                break;
            case TABLE_REQUEST:
                draft.topPlayersTable=demoTable;
                console.log(
                    "from reducer table request top players",
                    draft.topPlayersTable
                );
                break;
            default:
                return state;
        }
    });
}
