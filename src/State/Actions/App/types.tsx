export const LOGIN_REQUEST = 'LOGIN_REQUEST';

export interface ILoginRequest {
    type: typeof LOGIN_REQUEST;
    phoneNumber: string;
    fullName: string;
}

export type AppActionTypes = ILoginRequest;
