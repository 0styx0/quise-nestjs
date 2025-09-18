import { ObjectId } from "mongodb";

export interface Jwt {
    sub: ObjectId;
    username: string;
}

export interface LoginResponse {
    access_token: string;
}