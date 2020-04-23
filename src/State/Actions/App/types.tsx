import { ILoginDetails } from "../../../Containers/LoginPage";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const TABLE_REQUEST = 'TABLE_REQUEST';

export interface ILoginRequest {
    type: typeof LOGIN_REQUEST;
    loginDetails: ILoginDetails;
}

export interface ITableRequest {
    type: typeof TABLE_REQUEST;
    loginDetails: ILoginDetails;
}

export type AppActionTypes = ILoginRequest | ITableRequest;
