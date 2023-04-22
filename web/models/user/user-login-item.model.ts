import { User } from "~/entities/user/user.entity";

export class UserLoginItem {
    id?: number;
    name: string;
    email: string;

    private constructor(userListItem: UserLoginItem) {
        this.id = userListItem.id;
        this.name = userListItem.name;
        this.email = userListItem.email;
    }

    static fromUser(user: User): UserLoginItem {
        return new UserLoginItem({
            id: user.id,
            name: user.name,
            email: user.email
        });
    }
}