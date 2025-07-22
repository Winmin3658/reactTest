import axios from "axios";
import { API_SERVER_HOST } from "../api/todoApi"

// 서버 주소 및 api
const prefix = `${API_SERVER_HOST}/api/products`;

// 1. 선택
export const getOne = async (pno) => {
    const res = await axios.get(`${prefix}/${pno}`)
    return res.data
}

// 2. 전체리스트(페이지 부분)
export const getList = async (pageParam) => {
    const { page, size } = pageParam;
    const result = await axios.get(`${prefix}/list`, {
        params: { page: page, size: size },
    });
    return result.data;
};

// 3. 삽입
export const postAdd = async (product) => {
    // 파일 업로드 할 때에는 기본값이 'Content-Type': ‘application/json’을 ‘multipart/form-data’ 변경
    const header = { header: { 'Content-Type': 'multipart/form-data' } };
    const result = await axios.post(`${prefix}/`, product, header);
    return result.data;
};

