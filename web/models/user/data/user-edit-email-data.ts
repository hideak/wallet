import { User } from "~/entities/user/user";

export class UserEditEmailData {
    email: string;

    private constructor(userEditEmailData: UserEditEmailData) {
        this.email = userEditEmailData.email;
    }

    static fromUser(user: User): UserEditEmailData {
        return new UserEditEmailData({
            email: user.email
        });
    }
}