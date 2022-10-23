import { HasFormatter } from '../interfaces/HasFormatter';


export class Invoice implements HasFormatter {
    client: string;
    details: string;
    amount: number; 

    constructor (c: string, d: string, a: number){
        this.client = c;
        this.amount = a;
        this.details = d;
    }

    format() {
        return `${this.client} owes k.sh${this.amount} for ${this.details}`;
    }
}