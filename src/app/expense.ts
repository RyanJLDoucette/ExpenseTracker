export class Expense {
    amount: number;
    location: string;
    date: string;
    type: string;
    constructor(amount, location, date, type) {
        this.amount = amount;
        this.location = location;
        this.date = date;
        this.type = type;
    }
}