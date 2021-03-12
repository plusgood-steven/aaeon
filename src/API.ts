import axios from "axios"

interface LoginType {
    password: string;
    email: string;
}

interface RegisterTyoe {
    password: string;
    email: string;
    displayName: string;
    Birthday: string;
    Role: string;
    Company: string;
    Industry: string;
    Location: string;
    DateCreated: string;
    LastLogin: string;
    Group: string;
    Authority: string;
}
// User 相關API
const userRequest = axios.create({
    baseURL: "https://aaeonbackend.azurewebsites.net/users/"
}
);

export const apiUserLogin = (data: LoginType) => userRequest.post("/login", data)
export const apiUserRegister = (data: RegisterTyoe) => userRequest.post("/register", data)
