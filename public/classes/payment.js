export class Payment {
    constructor(c, d, a) {
        this.recipient = c;
        this.amount = a;
        this.details = d;
    }
    format() {
        return `${this.recipient} is owe k.sh${this.amount} for ${this.details}`;
    }
}
