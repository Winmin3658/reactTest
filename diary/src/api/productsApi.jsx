import axios from 'axios';
import { API_SERVER_HOST } from "./diaryApi"

const host = `${API_SERVER_HOST}/api/products`

export const postAdd = async (product) => {
    //파일업로드 할때에는 기본값인 ‘Content-Type’: ‘application/json’을 ‘multipart/form-data’ 변경해야됨
    const header = { headers: { 'Content-Type': 'multipart/form-data' } };
    const res = await axios.post(`${host}/`, product, header);
    return res.data;
};

export const getList = async (pageParam) => {
    const { page, size } = pageParam;
    const res = await axios.get(`${host}/list`, {
        params: { page: page, size: size },
    });
    return res.data;
};

export const getOne = async (tno) => {
    const res = await axios.get(`${host}/${tno}`)
    return res.data
}

export const putOne = async (pno, product) => {
    const header = { headers: { "Content-Type": "multipart/form-data" } }
    const res = await axios.put(`${host}/${pno}`
        , product, header)
    return res.data
}

export const deleteOne = async (pno) => {
    const res = await axios.delete(`${host}/${pno}`)
    return res.data
}