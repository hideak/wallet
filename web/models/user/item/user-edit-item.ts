import { User } from "~/entities/user/user";

export class UserEditItem {
    id?: number;
    name: string;
    usePassword: boolean;

    private constructor(userEditItem: UserEditItem) {
        this.id = userEditItem.id;
        this.name = userEditItem.name;
        this.usePassword = userEditItem.usePassword;
    }

    static fromUsers(users: User[]): UserEditItem[] {
        return users.map(user => UserEditItem.fromUser(user));
    }

    static fromUser(user: User): UserEditItem {
        return new UserEditItem({
            id: user.id,
            name: user.name,
            usePassword: Boolean(user.password)
        });
    }
}