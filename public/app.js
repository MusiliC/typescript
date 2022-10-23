import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
const form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
});
const addID = (obj) => {
    let uid = Math.floor(Math.random() * 1000);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addID({ name: "musili", age: 40 });
console.log(docOne);
//with interfaces
//ENUMS
var RecourseType;
(function (RecourseType) {
    RecourseType[RecourseType["BOOK"] = 0] = "BOOK";
    RecourseType[RecourseType["AUTHOR"] = 1] = "AUTHOR";
    RecourseType[RecourseType["FILM"] = 2] = "FILM";
    RecourseType[RecourseType["DIRECTOR"] = 3] = "DIRECTOR";
    RecourseType[RecourseType["PERSON"] = 4] = "PERSON";
})(RecourseType || (RecourseType = {}));
const docThree = {
    uid: 1,
    recourseType: RecourseType.BOOK,
    data: { name: "brian" }
};
const docFour = {
    uid: 1,
    recourseType: RecourseType.PERSON,
    data: ["brian", "moh"]
};
console.log(docThree, docFour);
//TUPLES
let array = ["str", 8, true];
let tup = ["musili", 25, true];
tup[0] = "ken";
