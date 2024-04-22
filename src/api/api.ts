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

export const authApi = {
    isAuth(){
        return instance.get('auth/me')
            .then(res => res.data)
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: string) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}


export const securityApi = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }
}



export const profileApi = {
    getUserProfile(userId: number){
        return instance.get(`profile/${userId}`)
            .then(res => res.data)
    },
    getStatus(userId: number) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus(status: string) {
        return instance.put('profile/status', {status: status})
    },
    savePhoto(photoFile: File) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type' : 'multipart/form-data'
            }
        } )
    },
    saveProfile(profile: updateProfileInfoType) {
        return instance.put('profile', profile)
    }
}

export type updateProfileInfoType = {
    fullName: string
    lfj : boolean
    mySkills: string
    aboutMe: string

}