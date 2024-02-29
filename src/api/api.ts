import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers(currentPage : number = 1, pageSize: number = 10)  {
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => response.data)
    },
    follow: (id: number) => {
        return instance.post(`follow/${id}`)
            .then(res => res.data)
    },
    unfollow: (id: number) => {
        return instance.delete(`follow/${id}`)
            .then(res => res.data)
    }

}
