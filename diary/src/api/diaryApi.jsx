import axios from "axios"
import jwtAxios from "../util/jwtUtil"

//서버 주소
export const API_SERVER_HOST =
    'http://localhost:8080'
const prefix =
    `${API_SERVER_HOST}/api/diary`

export const getOne = async (tno) => {
    const res = await jwtAxios.get(`${prefix}/${tno}`)
    return res.data
}
export const getList = async (pageParam) => {
    const { page, size } = pageParam
    const res = await jwtAxios.get(`${prefix}/list`, { params: { page: page, size: size } })
    return res.data
}
export const postAdd = async (diaryObj) => {
    const res = await jwtAxios.post(`${prefix}/`, diaryObj)
    return res.data
}
export const deleteOne = async (tno) => {
    const res = await jwtAxios.delete(`${prefix}/${tno}`);
    return res.data;
}
export const putOne = async (diary) => {
    const res = await jwtAxios.put(`${prefix}/${diary.tno}`
        , diary)
    return res.data
}