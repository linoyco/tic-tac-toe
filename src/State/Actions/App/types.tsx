import { ILoginDetails } from "../../../Containers/LoginPage";
import { IPlayerStats } from "../../Reducers/app";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const TABLE_REQUEST = "TABLE_REQUEST";
export const ERROR_MESSAGE = "ERROR_MESSAGE";

export interface ILoginRequest {
    type: typeof LOGIN_REQUEST;
    loginDetails: ILoginDetails;
}

export interface ITableRequest {
    type: typeof TABLE_REQUEST;
    loginDetails: ILoginDetails;
    topPlayersTable: Array<IPlayerStats>;
}

export interface ISetErrorMessage {
    type: typeof ERROR_MESSAGE;
    error: string;
}

export type AppActionTypes = ILoginRequest | ITableRequest | ISetErrorMessage;
