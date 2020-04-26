import axios from './index';
import { ILoginDetails } from '../Containers/LoginPage';

export const loginRequest = (loginDetails: ILoginDetails) => {
    return axios.post("/5ea348e54f00003729d9f8ee", loginDetails);
}

export const tableRequest = (loginDetails: ILoginDetails) => {
    return axios.post('/5ea475f83000002b14ce2d28', loginDetails);
}
