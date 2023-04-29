import { UserNewData } from "~/models/user/data/user-new-data";

export class User {
    id?: number;
    name: string;
    email: string;
    password: string | null;

    private constructor(user: User) {
        this.id = user.id;
        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
    }

    static fromUserNewData(userNewData: UserNewData, hashedPassword: string | null): User {
        return new User({
            name: userNewData.name,
            email: userNewData.email,
            password: hashedPassword
        });
    }
}
