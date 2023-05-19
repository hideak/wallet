import { User } from "~/entities/user/user";
import { UserEditNameData } from "~/models/user/data/user-edit-name-data";
import { UserEditPasswordData } from "~/models/user/data/user-edit-password-data";
import { UserEditPasswordEnableData } from "~/models/user/data/user-edit-password-enable-data";
import { UserNewData } from "~/models/user/data/user-new-data";
import { UserEditItem } from "~/models/user/item/user-edit-item";
import { UserLoginItem } from "~/models/user/item/user-login-item";
import { UserRepository } from "~/repositories/user-repository";
import { passwordService } from "./password-service";
import { UserEditEmailData } from "~/models/user/data/user-edit-email-data";

export class UserService {
    private userRepository = UserRepository.getRepository();

    async getAllUserLoginItems(): Promise<UserLoginItem[]> {
        const users = await this.userRepository.getAll();
        return UserLoginItem.fromUsers(users);
    }

    async getAllUserEditItems(): Promise<UserEditItem[]> {
        const users = await this.userRepository.getAll();
        return UserEditItem.fromUsers(users);
    }

    async getUserEditItem(id: number): Promise<UserEditItem> {
        const user = await this.userRepository.get(id);
        if (!user) { throw new Error(`User with id ${id} not found`); }

        return UserEditItem.fromUser(user);
    }

    async getUserEditNameData(id: number): Promise<UserEditNameData> {
        const user = await this.userRepository.get(id);
        if (!user) { throw new Error(`User with id ${id} not found`); }

        return UserEditNameData.fromUser(user);
    }

    async getUserEditEmailData(id: number): Promise<UserEditEmailData> {
        const user = await this.userRepository.get(id);
        if (!user) { throw new Error(`User with id ${id} not found`); }

        return UserEditEmailData.fromUser(user);
    }

    async createUser(userNewData: UserNewData): Promise<void> {
        const password = userNewData.password;
        const hashedPasswordOrNull = userNewData.usePassword
            ? await passwordService.hash(password)
            : null;

        const user = User.fromUserNewData(userNewData, hashedPasswordOrNull);
        await this.userRepository.upsert(user);
    }

    async deleteUser(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }

    async editUserName(id: number, userEditNameData: UserEditNameData): Promise<void> {
        const user = await this.userRepository.get(id);
        if (!user) { throw new Error(`User with id ${id} not found`); }
        if (!userEditNameData.name) { throw new Error(`The provided user name is not valid`); }

        user.name = userEditNameData.name;
        await this.userRepository.upsert(user);
    }

    async editUserEmail(id: number, userEditEmailData: UserEditEmailData): Promise<void> {
        const user = await this.userRepository.get(id);
        if (!user) { throw new Error(`User with id ${id} not found`); }
        if (!userEditEmailData.email) { throw new Error(`The provided user e-mail is not valid`); }

        user.email = userEditEmailData.email;
        await this.userRepository.upsert(user);
    }

    async validatePassword(id: number, password: string): Promise<boolean> {
        const user = await this.userRepository.get(id);
        if (!user) { throw new Error(`User with id ${id} not found`); }
        if (!user.password) { throw new Error(`User with id ${id} does not have a password assigned`); }

        const hash = user.password;
        return await passwordService.compare(password, hash);
    }

    async editUserPassword(id: number, userEditPasswordData: UserEditPasswordData): Promise<void> {
        const user = await this.userRepository.get(id);
        if (!user) { throw new Error(`User with id ${id} not found`); }

        const password = userEditPasswordData.password;
        const hashedPassword = await passwordService.hash(password);

        user.password = hashedPassword;
        await this.userRepository.upsert(user);
    }

    async disableUserPassword(id: number): Promise<void> {
        const user = await this.userRepository.get(id);
        if (!user) { throw new Error(`User with id ${id} not found`); }

        user.password = null;
        await this.userRepository.upsert(user);
    }

    async enableUserPassword(id: number, userEditPasswordEnableData: UserEditPasswordEnableData): Promise<void> {
        const user = await this.userRepository.get(id);
        if (!user) { throw new Error(`User with id ${id} not found`); }

        const password = userEditPasswordEnableData.password;
        const hashedPassword = await passwordService.hash(password);

        user.password = hashedPassword;
        await this.userRepository.upsert(user);
    }
}

export const userService = new UserService();