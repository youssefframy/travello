import { API_ENDPOINTS } from "@/lib/const";
import { defaultAPI } from "../axios";

export const signin = async (body:{email:string,password:string}) => {
    const { data } = await defaultAPI.post(`${API_ENDPOINTS.signin}`,body);
    return data;
  };
  export const signup = async (body:{name:string,email:string,password:string}) => {
    const { data } = await defaultAPI.post(`${API_ENDPOINTS.signup}`,body);
    return data;
  };
