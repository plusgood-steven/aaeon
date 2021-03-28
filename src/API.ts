import axios from "axios"
import store from "@/store/index"
import { LoginType } from "@/interefaces/Auth"
import { RegisterType } from "@/interefaces/User"

// Auth api
const AuthRequest = axios.create({
    baseURL: "https://aaeonbackend.azurewebsites.net/auth/"
})

export const apiUserLogin = (data: LoginType) => AuthRequest.post("/login", data)

// User api
const userRequest = axios.create({
    baseURL: "https://aaeonbackend.azurewebsites.net/users/",
}
);

export const apiUserRegister = (data: RegisterType) => userRequest.post("/register", data)
export const apiUserGet = () => userRequest.get("/", {
    headers: {
        'Authorization': `Bearer ${store.state.token}`
    }
})


// images api
const imagesRequest = axios.create({
    baseURL: "https://aaeonbackend.azurewebsites.net//collections/"
})

export const apiImagesOverview = () => imagesRequest.get("/overview", {
    headers: {
        'Authorization': `Bearer ${store.state.token}`
    }
})
