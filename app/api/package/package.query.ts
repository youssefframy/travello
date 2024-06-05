import { API_ENDPOINTS } from "@/lib/const";
import { defaultAPI } from "../axios";

export const getPackages = async (
    per_page?: number,
    page?: number,
    handle?: string
  ) => {
    const { data } = await defaultAPI.get(`${API_ENDPOINTS.package}`,{params:{
        per_page,
        page,
        handle
    }});
    return data;
  };
