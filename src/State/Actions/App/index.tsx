import * as AppActions from './types';
import { ILoginDetails } from '../../../Containers/LoginPage';
import { IPlayerStats } from '../../Reducers/app';

export function loginRequest(loginDetails: ILoginDetails): AppActions.ILoginRequest {
    return {
        type: AppActions.LOGIN_REQUEST,
        loginDetails: loginDetails
    }
}

export function tableRequest(loginDetails:ILoginDetails,topPlayersTable: Array<IPlayerStats>) :AppActions.ITableRequest {
    return {
        type: AppActions.TABLE_REQUEST,
        loginDetails:loginDetails,
        topPlayersTable:topPlayersTable
    }
}