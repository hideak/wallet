import { User } from "~/entities/user/user.entity";
import { UserEditItem } from "~/models/user/user-edit-item.model";
import { UserLoginItem } from "~/models/user/user-login-item.model";
import { userRepository } from "~/repositories/user.repository"

export class UserService {
    async getAllUserLoginItems(): Promise<UserLoginItem[]> {
        const users = await userRepository.getAll();
        return UserLoginItem.fromUsers(users);
    }

    async getAllUserEditItems(): Promise<UserEditItem[]> {
        const users = await userRepository.getAll();
        return UserEditItem.fromUsers(users);
    }

    async getUserEditItem(id: number): Promise<UserEditItem | undefined> {
        const user = await userRepository.get(id);
        if (!user) { throw new Error(`User with id ${id} not found`); }

        return UserEditItem.fromUser(user);
    }

    async createUser(user: User): Promise<number> {
        return await userRepository.upsert(user);
    }
}

export const userService = new UserService();