import axios from "axios"

const BASE_URL="http://localhost:5000/api/"
// const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOGU1ZGM5ZWFlMjE3NTIwZGM4Yjk3ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzU3MTE3OSwiZXhwIjoxNjUzODMwMzc5fQ.bDhXqC58OOLXD-yRr562Lp4aQ407yM7_X8N5ajvQ82g";


const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest=axios.create({
    baseURL:BASE_URL,
});
export const userRequest=axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`},
})