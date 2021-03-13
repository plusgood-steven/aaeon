import axios from "axios"
import { LoginType, RegisterType } from "@/data/interface"

// User 相關API
const userRequest = axios.create({
    baseURL: "https://aaeonbackend.azurewebsites.net/users/"
}
);

const imagesRequest = axios.create({
    baseURL: "https://aaeonbackend.azurewebsites.net/images/"
})

export const apiUserLogin = (data: LoginType) => userRequest.post("/login", data)
export const apiUserRegister = (data: RegisterType) => userRequest.post("/register", data)


export const apiImagesOverview = () => imagesRequest.get("/overview")
