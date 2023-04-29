import Dexie from 'dexie';
import { User } from '~/entities/user/user';
import { Account } from '~/entities/account/account';
import { Category } from '~/entities/category/category';
import { Subcategory } from '~/entities/subcategory/subcategory';
import { Expense } from '~/entities/expense/expense';
import { Income } from '~/entities/income/income';
import { Transfer } from '~/entities/transfer/transfer';
import { TransactionGroup } from '~/entities/transaction-group/transaction-group';

export class WalletDatabase extends Dexie {
    users!: Dexie.Table<User, number>;
    accounts!: Dexie.Table<Account, number>;
    categories!: Dexie.Table<Category, number>;
    subcategories!: Dexie.Table<Subcategory, number>;
    expenses!: Dexie.Table<Expense, number>;
    incomes!: Dexie.Table<Income, number>;
    transfers!: Dexie.Table<Transfer, number>;
    transactionGroups!: Dexie.Table<TransactionGroup, number>;

    constructor() {
        super("wallet-db");

        this.version(1).stores({
            users: 'id++, name, email, password',
            accounts: 'id++, name, type, isArchived, userId',
            categories: 'id++, name, type, color, icon, userId',
            subcategories: 'id++, name, color, icon, categoryId',
            expenses: 'id++, description, amount, creationDate, dueDate, '
                + 'confirmationDate, categoryId, subcategoryId, details, '
                + 'isConfirmed, isIgnored, transactionGroupId, accountId, type',
            incomes: 'id++, description, amount, creationDate, dueDate, '
                + 'confirmationDate, categoryId, subcategoryId, details, '
                + 'isConfirmed, isIgnored, transactionGroupId, accountId, '
                + 'type',
            transfers: 'id++, description, amount, creationDate, dueDate, '
                + 'confirmationDate, categoryId, subcategoryId, details, '
                + 'isConfirmed, isIgnored, transactionGroupId, accountId, '
                + 'type, sourceAccountId, targetAccountId',
            transactionGroups: 'id++, description, userId'
        });
    }
}

export const walletDatabase = new WalletDatabase();