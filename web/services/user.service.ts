import { UserEditItem } from "~/models/user/user-edit-item.model";
import { UserLoginItem } from "~/models/user/user-login-item.model";
import { userRepository } from "~/repositories/user.repository"

export class UserService {
    async getAllUserLoginItems(): Promise<UserLoginItem[]> {
        const users = await userRepository.getAll();
        return users.map(user => UserLoginItem.fromUser(user));
    }

    async getAllUserEditItems(): Promise<UserEditItem[]> {
        const users = await userRepository.getAll();
        return users.map(user => UserEditItem.fromUser(user));
    }
}

export const userService = new UserService();