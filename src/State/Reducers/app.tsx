import produce from "immer";
import { AppActionTypes, LOGIN_REQUEST, TABLE_REQUEST, ERROR_MESSAGE, LOGOUT_REQUEST } from "../Actions/App/types";
import { ILoginDetails } from "../../Containers/LoginPage";

export interface IPlayerStats {
    rank:string
    fullName: string;
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
            case LOGOUT_REQUEST:
                draft.loginDetails={fullName:"",phoneNumber:""}
                draft.topPlayersTable=[]
                draft.errorMessage=""
                break;
            case TABLE_REQUEST:
                draft.topPlayersTable = action.topPlayersTable;
                break;
            case ERROR_MESSAGE:
                draft.errorMessage = action.error;
                break;
        }
    });
}
