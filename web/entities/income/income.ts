import { TransactionType } from "../transaction/transaction-type";
import { Transaction } from "../transaction/transaction";

export class Income extends Transaction {
    type: TransactionType

    private constructor(income: Income) {
        super(income);
        this.type = TransactionType.Income;
    }
}