export interface LoginType {
    password: string;
    email: string;
}

export interface TokenData {
    token: string;
    expiresIn: number;
}