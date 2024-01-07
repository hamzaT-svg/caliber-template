import { DefaultUser } from "next-auth";

// common interface for JWT and Session
interface IUser extends DefaultUser {
    token: string;
    business_id: number;
    customer_id: number;
    user_type: string;
}

declare module "next-auth" {
    interface User extends IUser { }
    interface Session {
        user?: User;
    }
}

declare module "next-auth/jwt" {
    interface JWT extends IUser { }
}
