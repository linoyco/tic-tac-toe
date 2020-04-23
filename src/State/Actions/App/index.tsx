import * as AppActions from './types';
import { ILoginDetails } from '../../../Containers/LoginPage';

export function loginRequest(loginDetails: ILoginDetails): AppActions.ILoginRequest {
    return {
        type: AppActions.LOGIN_REQUEST,
        loginDetails: loginDetails
    }
}

export function tableRequest(loginDetails: ILoginDetails) :AppActions.ITableRequest {
    return {
        type: AppActions.TABLE_REQUEST,
        loginDetails:loginDetails
    }
}