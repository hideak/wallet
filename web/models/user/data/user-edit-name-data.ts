import { User } from "~/entities/user/user";

export class UserEditNameData {
    name: string;

    private constructor(userEditNameData: UserEditNameData) {
        this.name = userEditNameData.name;
    }

    static fromUser(user: User): UserEditNameData {
        return new UserEditNameData({
            name: user.name
        });
    }
}