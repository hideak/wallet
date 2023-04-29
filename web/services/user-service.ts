import { User } from "~/entities/user/user";
import { UserEditPasswordEnableData } from "~/models/user/data/user-edit-password-enable-data";
import { UserNewData } from "~/models/user/data/user-new-data";
import { UserEditItem } from "~/models/user/item/user-edit-item";
import { UserLoginItem } from "~/models/user/item/user-login-item";
import { userRepository } from "~/repositories/user-repository";
import { passwordService } from "./password-service";

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

    async createUser(userNewData: UserNewData): Promise<void> {
        const password = userNewData.password;
        const hashedPasswordOrNull = userNewData.usePassword
            ? await passwordService.hash(password)
            : null;

        const user = User.fromUserNewData(userNewData, hashedPasswordOrNull);
        await userRepository.upsert(user);
    }

    async enableUserPassword(id: number, userEditPasswordEnableData: UserEditPasswordEnableData): Promise<void> {
        const password = userEditPasswordEnableData.password;
        const hashedPassword = await passwordService.hash(password);
        const user = await userRepository.get(id);

        if (!user) { throw new Error(`User with id ${id} not found`); }

        user.password = hashedPassword;
        await userRepository.upsert(user);
    }
}

export const userService = new UserService();