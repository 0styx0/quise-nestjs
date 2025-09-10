import { ObjectId } from "mongodb";

export interface Jwt {
    sub: ObjectId;
    username: string;
}