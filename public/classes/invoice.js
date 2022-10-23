export class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.amount = a;
        this.details = d;
    }
    format() {
        return `${this.client} owes k.sh${this.amount} for ${this.details}`;
    }
}
