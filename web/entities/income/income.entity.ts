import { TransactionType } from "../transaction/transaction-type.enum";
import { Transaction } from "../transaction/transaction.entity";

export class Income extends Transaction {
    type: TransactionType

    private constructor(income: Income) {
        super(income);
        this.type = TransactionType.Income;
    }
}