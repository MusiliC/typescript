
import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let values : [string, string, number]= [tofrom.value, details.value, amount.valueAsNumber]

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(...values)
  } else {
    doc = new Payment(...values);
  }
  
  list.render(doc, type.value, "end");
});

const addID = <T extends {name: string}> (obj: T) => {
  let uid = Math.floor(Math.random( ) * 1000);
  return {...obj, uid}
}

let docOne = addID({name: "musili", age: 40})

console.log(docOne)

//with interfaces


//ENUMS

enum RecourseType{ BOOK, AUTHOR, FILM, DIRECTOR, PERSON}

interface Resource <T> {
  uid: number;
   recourseType:  RecourseType;
  data: T;
}

const docThree: Resource<object> = {
  uid:1,
  recourseType: RecourseType.BOOK,
  data: {name: "brian"}
}


const docFour: Resource<string[]> = {
  uid:1,
  recourseType: RecourseType.PERSON,
  data: [ "brian", "moh"]
}

console.log(docThree, docFour)

//TUPLES

let array = ["str", 8, true]


let tup :[string, number, boolean] = ["musili", 25, true]
tup[0] = "ken"