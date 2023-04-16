import { TransactionType } from "../transaction/transaction-type.enum";
import { Transaction } from "../transaction/transaction.entity";

export class Expense extends Transaction {
    type: TransactionType

    private constructor(expense: Expense) {
        super(expense);
        this.type = TransactionType.Expense;
    }
}