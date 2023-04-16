import { TransactionType } from "../transaction/transaction-type.enum";
import { Transaction } from "../transaction/transaction.entity";

export class Transfer extends Transaction {
    type: TransactionType
    sourceAccountId: number;
    targetAccountId: number;

    private constructor(transfer: Transfer) {
        super(transfer);
        this.type = TransactionType.Income;
        this.sourceAccountId = transfer.sourceAccountId;
        this.targetAccountId = transfer.targetAccountId;
    }
}