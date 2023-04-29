import { AccountType } from "./account-type";

export class Account {
    id?: number;
    name: string;
    type: AccountType;
    isArchived: boolean;
    userId: number;

    private constructor(account: Account) {
        this.id = account.id;
        this.name = account.name;
        this.type = account.type;
        this.isArchived = account.isArchived
        this.userId = account.userId;
    }
}

