// 1. შექმენით 5 ელემენტიანი რიცვების მასივი, console.log-ით გამოიტანეთ ამ მასივის ელემენტების საშუალო არითმეტიკული;

// 2. შექმენით 5 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის ობიექტი, რომელსაც გააჩნია name  და age property.
// 3. შექმენით ობიექტი რომელსაც გააჩნია შემდეგი ველები (properties):
// firstName - სტრინგ ტიპის მნიშვნელობა
// lastName - სტრინგ ტიპის მნიშვნელობა
// address - სტრინგების მასივი
// age - რიცხვითი მნიშვნელობა
// phoneNumbers - რიცხვითი მნიშვნელობების მასივი
// 4. console.log ში გამოიტანეთ სტრინგი "My name is (#3 დავალების firstName  მნიშვნელობა)", My age is (#3 დავალების age-ის მნიშვნელობა)", "My address is (#3 დავალების address-ის პირველი ელემენტის მნიშვნელობა)"

// 1.
let myarr = [2, 5, 8, 9, 10];
let sum = 2 + 5 + 8 + 9 + 10;
console.log(`sum=${sum / myarr.length}`);
// 2.
let arr2 = [
  {
    name: "giorgi",
    age: "19",
  },
  {
    name: "marta",
    age: "17",
  },
  {
    name: "dato",
    age: "20",
  },
  {
    name: "nino",
    age: "25",
  },
  {
    name: "nuca",
    age: "19",
  },
];
console.log(` arr2 includes ${arr2.length}  element`);
// 3.
let myObject = {
  firstName: "giorgi",
  lastName: "khoshtaria",
  address: ["tavdadebuli", "tbilisi"],
  age: 19,
  phoneNumber: [599263413, 555454568],
};
console.log(myObject);
// 4.
console.log("my name is " + myObject.firstName);
console.log("my age is " + myObject.age);
