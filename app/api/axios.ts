import axios from "axios";
import { GetServerSidePropsContext } from "next";
import Cookies from "js-cookie";
import { cookies } from "next/headers";
import { useParams, usePathname, useRouter } from "next/navigation";
import { ACCESS_TOKEN, BASE_URL } from "@/lib/const";
const VALIDATION_ERRORS_RESPONSE = 422;
const UNAUTHENTICATED_ERROR = 401;

export const defaultAPI = axios.create({
    baseURL: BASE_URL,
});

const isServer = () => {
    return typeof window === "undefined";
};

let locale = "";
let context = <GetServerSidePropsContext>{};

export const setLocale = (_locale: string) => {
    locale = _locale;
};

export const getLocale = () => locale;

export const setContext = (_context: GetServerSidePropsContext) => {
    context = _context;
};

defaultAPI.interceptors.response.use(
    function (response) {
        const SHOW_TOAST = response.data.showToast;

        if (SHOW_TOAST) {
            if (response.data.message !== "Message Created Successfully") {
                // toast.dismiss();
                // toast.success(response.data.message);
            }
        }

        return response;
    },
    function (error) {
        // const STATUS_CODE = error.response.status;
        // if (STATUS_CODE === VALIDATION_ERRORS_RESPONSE) {
        //     const responseErrors = error.response.data.data;

        //     const firstErrorKey = Object.keys(responseErrors)[0];

        // } else if (
        //     STATUS_CODE === UNAUTHENTICATED_ERROR &&
        //     error.config.url !== "/auth/login/dashboard"
        // ) {
        //     Cookies.remove(ACCESS_TOKEN);
        //     localStorage.removeItem(ACCESS_TOKEN);
        //     return (window.location.href = "/signin");
        // } else {
        //     // toast.dismiss();
        //     // toast.error(error.response.data.message);
        // }

        return Promise.reject(error);
    }
);

defaultAPI.interceptors.request.use(
    (config) => {
        config.headers.Authorization = `Bearer ${localStorage.getItem(
            ACCESS_TOKEN
        )}`;
        if (!isServer()) {
            config.headers.Locale = window.location.pathname.slice(1, 3) == 'ar' ? "ar" : "en";
        }
        // if (isServer() && context?.req?.cookies) {
        //     config.headers.Locale = context?.req?.cookies?.NEXT_LOCALE || "en";
        // }
        config.headers.Accept = "application/json";
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);