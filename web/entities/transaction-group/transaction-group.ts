export class TransactionGroup {
    id?: number;
    description: string;
    userId: number;

    private constructor(transactionGroup: TransactionGroup) {
        this.id = transactionGroup.id;
        this.description = transactionGroup.description;
        this.userId = transactionGroup.userId;
    }
}
