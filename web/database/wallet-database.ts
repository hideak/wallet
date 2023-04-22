import Dexie from 'dexie';
import { User } from '~/entities/user/user.entity';
import { Account } from '~/entities/account/account.entity';
import { Category } from '~/entities/category/category.entity';
import { Subcategory } from '~/entities/subcategory/subcategory.entity';
import { Expense } from '~/entities/expense/expense.entity';
import { Income } from '~/entities/income/income.entity';
import { Transfer } from '~/entities/transfer/transfer.entity';
import { TransactionGroup } from '~/entities/transaction-group/transaction-group.entity';

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