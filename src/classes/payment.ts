import { HasFormatter } from '../interfaces/HasFormatter';


export class Payment implements HasFormatter {
    recipient: string;
    details: string;
    amount: number; 

    constructor (c: string, d: string, a: number){
        this.recipient = c;
        this.amount = a;
        this.details = d;
    }

    format() {
        return `${this.recipient} is owe k.sh${this.amount} for ${this.details}`;
    }
}