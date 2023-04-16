export class Transaction {
    id?: number;
    description: string;
    amount: number;
    creationDate: Date;
    dueDate: Date | null;
    confirmationDate: Date | null;
    categoryId: number | null;
    subcategoryId: number | null;
    details: string;
    isConfirmed: boolean;
    isIgnored: boolean;
    transactionGroupId: number | null
    accountId: number;

    protected constructor(transaction: Transaction) {
        this.id = transaction.id;
        this.description = transaction.description;
        this.amount = transaction.amount;
        this.creationDate = transaction.creationDate;
        this.dueDate = transaction.dueDate;
        this.confirmationDate = transaction.confirmationDate;
        this.categoryId = transaction.categoryId;
        this.subcategoryId = transaction.subcategoryId;
        this.details = transaction.details;
        this.isConfirmed = transaction.isConfirmed;
        this.isIgnored = transaction.isIgnored;
        this.transactionGroupId = transaction.transactionGroupId;
        this.accountId = transaction.accountId
    }
}