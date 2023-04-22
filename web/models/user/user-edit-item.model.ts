import { User } from "~/entities/user/user.entity";

export class UserEditItem {
    id?: number;
    name: string;

    private constructor(userListItem: UserEditItem) {
        this.id = userListItem.id;
        this.name = userListItem.name;
    }

    static fromUsers(users: User[]): UserEditItem[] {
        return users.map(user => UserEditItem.fromUser(user));
    }

    static fromUser(user: User): UserEditItem {
        return new UserEditItem({
            id: user.id,
            name: user.name,
        });
    }
}