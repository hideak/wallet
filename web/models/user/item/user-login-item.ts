import { User } from "~/entities/user/user";

export class UserLoginItem {
    id?: number;
    name: string;
    email: string;

    private constructor(userLoginItem: UserLoginItem) {
        this.id = userLoginItem.id;
        this.name = userLoginItem.name;
        this.email = userLoginItem.email;
    }

    static fromUsers(users: User[]): UserLoginItem[] {
        return users.map(user => UserLoginItem.fromUser(user));
    }

    static fromUser(user: User): UserLoginItem {
        return new UserLoginItem({
            id: user.id,
            name: user.name,
            email: user.email
        });
    }
}