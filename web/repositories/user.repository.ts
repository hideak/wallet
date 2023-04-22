import { User } from "~/entities/user/user.entity";
import { BaseRepository } from "./base/base.repository";
import { walletDatabase } from "~/database/wallet-database";

export class UserRepository extends BaseRepository<User, number> {
    constructor() {
        super(walletDatabase.users);
    }
}

export const userRepository = new UserRepository();