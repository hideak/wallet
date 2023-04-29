import { TransactionType } from "../transaction/transaction-type";
import { Transaction } from "../transaction/transaction";

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