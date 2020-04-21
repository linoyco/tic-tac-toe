import * as AppActions from './types'

export function loginRequest(phoneNumber: string, fullName: string): AppActions.ILoginRequest {
    return {
        type: AppActions.LOGIN_REQUEST,
        phoneNumber: phoneNumber,
        fullName: fullName
    }
}