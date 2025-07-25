import axios from "axios";

// 서버 주소 및 api
export const API_SERVER_HOST = 'http://localhost:8080';
const prefix = `${API_SERVER_HOST}/api/todo`;

// 1. 삽입 http://localhost:8080/api/todo/100 === axios.get(`${prefix}/${tno}`)
// await 서버주소; ==> 서버에서 답변을 기다리고 있는 중
// const result = await 서버주소, 요청응답 기다리고 있다가 요청이 오면, 요청값을 받아서 저장
export const getOne = async (tno) => {
    const result = await axios.get(`${prefix}/${tno}`);
    return result.data;
}

// 2. 페이징리스트
// 선택 http://localhost:8080/api/todo/list?page=2&size=10
export const getList = async (pageParam) => {
    const { page, size } = pageParam;
    const result = await axios.get(`${prefix}/list`, {
        params: { page: page, size: size },
    });
    return result.data;
};

// 3. 삽입
export const postAdd = async (todo) => {
    const result = await axios.post(`${prefix}/`, todo);
    return result.data;
};

// 4. 수정
export const putOne = async (todo) => {
    const result = await axios.put(`${prefix}/${todo.tno}`, todo)
    return result.data
}

// 5. 삭제
export const deleteOne = async (tno) => {
    const result = await axios.delete(`${prefix}/${tno}`);
    return result.data;
}