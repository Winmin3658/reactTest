import jwtAxios from "../util/jwtUtil"
import { API_SERVER_HOST } from "./diaryApi"

const host = `${API_SERVER_HOST}/api/products`

export const postAdd = async (product) => {
    //파일업로드 할때에는 기본값인 ‘Content-Type’: ‘application/json’을 ‘multipart/form-data’ 변경해야됨
    const header = { headers: { 'Content-Type': 'multipart/form-data' } };
    const res = await jwtAxios.post(`${host}/`, product, header);
    return res.data;
};

export const getList = async (pageParam) => {
    const { page, size } = pageParam;
    const res = await jwtAxios.get(`${host}/list`, {
        params: { page: page, size: size },
    });
    return res.data;
};

export const getOne = async (tno) => {
    const res = await jwtAxios.get(`${host}/${tno}`)
    return res.data
}

export const putOne = async (pno, product) => {
    const header = { headers: { "Content-Type": "multipart/form-data" } }
    const res = await jwtAxios.put(`${host}/${pno}`
        , product, header)
    return res.data
}

export const deleteOne = async (pno) => {
    const res = await jwtAxios.delete(`${host}/${pno}`)
    return res.data
}