import produce from 'immer';
import { AppActionTypes, LOGIN_REQUEST } from '../Actions/App/types';

export interface IAppState {
    readonly loginDetails: {
        phoneNumber: string;
        fullName: string;
    }
};

const initialState: IAppState = {
    loginDetails: {
        phoneNumber: '',
        fullName: ''
    }
};

export function appReducer(state: IAppState = initialState, action: AppActionTypes) {
    return produce(state, draft => {
        switch (action.type) {
            case LOGIN_REQUEST:
                draft.loginDetails = action.loginDetails;
                console.log('from reducer ',draft.loginDetails);
                break;
        }
    });
};
