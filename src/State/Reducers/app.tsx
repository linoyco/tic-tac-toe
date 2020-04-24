import produce from "immer";

import { AppActionTypes, LOGIN_REQUEST, TABLE_REQUEST, ERROR_MESSAGE } from "../Actions/App/types";
import { demoTable } from "../../Lib/demoTable";
import { ILoginDetails } from "../../Containers/LoginPage";

export interface IPlayerStats {
    fullName: string;
    phoneNumber: string;
    numberOfWins: number;
}

export interface IAppState {
    readonly loginDetails: ILoginDetails;
    readonly topPlayersTable: Array<IPlayerStats>;
    readonly errorMessage: string;
}

const initialState: IAppState = {
    loginDetails: {
        phoneNumber: '',
        fullName: '',
    },
    topPlayersTable: [],
    errorMessage: ''
}

export function appReducer(state: IAppState = initialState, action: AppActionTypes) {
    return produce(state, draft => {
        switch (action.type) {
            case LOGIN_REQUEST:
                draft.loginDetails = action.loginDetails;
                break;
            case TABLE_REQUEST:
                draft.topPlayersTable = demoTable;
                break;
            case ERROR_MESSAGE:
                draft.errorMessage = action.error;
                break;
        }
    });
}
