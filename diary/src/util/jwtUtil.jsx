import axios from "axios";
import { getCookie, setCookie } from "./cookieUtil";
import { API_SERVER_HOST } from "../api/diaryApi";

// const jwtAxios = axios.create();
const jwtAxios = axios.create({
    withCredentials: true
});

const refreshJWT = async (accessToken, refreshToken) => {
    const host = API_SERVER_HOST;
    const res = await axios.get(`${host}/api/member/refresh`, {
        params: { refreshToken },
        headers: { Authorization: `Bearer ${accessToken}` }
    });
    return res.data;
};

const beforeReq = (config) => {
    const memberInfo = getCookie("member");
    console.log(memberInfo);
    if (!memberInfo) {
        return Promise.reject({
            response: { data: { error: "REQUIRE_LOGIN" } }
        });
    }
    const { accessToken } = memberInfo;
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
};

const requestFail = (err) => Promise.reject(err);

const beforeRes = async (res) => {
    const data = res.data;
    if (data && data.error === 'ERROR_ACCESS_TOKEN') {
        const memberCookieValue = getCookie("member");
        const result = await refreshJWT(memberCookieValue.accessToken, memberCookieValue.refreshToken);
        if (!result.accessToken) {
            // refreshToken도 만료! 강제 로그아웃 등 추가
            // setCookie("member", null, 0);
            window.location.href = "/login";
            return Promise.reject(new Error("재로그인 필요"));
        }
        memberCookieValue.accessToken = result.accessToken;
        memberCookieValue.refreshToken = result.refreshToken;
        setCookie("member", memberCookieValue, 1);

        const originalRequest = res.config;
        originalRequest.headers.Authorization = `Bearer ${result.accessToken}`;
        return await axios(originalRequest);
    }
    return res;
};

const responseFail = (err) => Promise.reject(err);

jwtAxios.interceptors.request.use(beforeReq, requestFail);
jwtAxios.interceptors.response.use(beforeRes, responseFail);

export default jwtAxios;
