import { TransactionType } from "../transaction/transaction-type";
import { Transaction } from "../transaction/transaction";

export class Expense extends Transaction {
    type: TransactionType

    private constructor(expense: Expense) {
        super(expense);
        this.type = TransactionType.Expense;
    }
}