import axios from "axios";
import { API_SERVER_HOST } from "../api/todoApi"
import jwtAxios from "../util/jwtUtil"

// 서버 주소 및 api
const prefix = `${API_SERVER_HOST}/api/products`;

// 1. 선택
export const getOne = async (pno) => {
    const res = await jwtAxios.get(`${prefix}/${pno}`)
    return res.data
}

// 2. 전체리스트(페이지 부분)
export const getList = async (pageParam) => {
    const { page, size } = pageParam;
    const result = await jwtAxios.get(`${prefix}/list`, {
        params: { page: page, size: size },
    });
    return result.data;
};

// 3. 삽입
export const postAdd = async (product) => {
    // 파일 업로드 할 때에는 기본값이 'Content-Type': ‘application/json’을 ‘multipart/form-data’ 변경
    const header = { header: { 'Content-Type': 'multipart/form-data' } };
    const result = await jwtAxios.post(`${prefix}/`, product, header);
    return result.data;
};

export const putOne = async (pno, product) => {
    const header = { headers: { "Content-Type": "multipart/form-data" } }
    const res = await jwtAxios.put(`${prefix}/${pno}`
        , product, header)
    return res.data
}

export const deleteOne = async (pno) => {
    const res = await jwtAxios.delete(`${prefix}/${pno}`)
    return res.data
}

