import { User } from "~/entities/user/user";
import { BaseRepository } from "./base/base-repository";
import { WalletDatabase } from "~/database/wallet-database";

export class UserRepository extends BaseRepository<User, number> {
    static instance: UserRepository;
    static getRepository(): UserRepository {
        return this.instance || (this.instance = new UserRepository());
    }

    constructor() {
        super(WalletDatabase.getDatabase().users);
    }
}
