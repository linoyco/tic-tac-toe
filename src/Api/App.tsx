import axios from "./index";
import { ILoginDetails } from "../Containers/LoginPage";

export const loginRequest=(loginDetails: ILoginDetails)=> {
    return axios.post("/5ea348e54f00003729d9f8ee", loginDetails);
}
