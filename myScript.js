// var person = {
//   name: "ahmed",
//   age: 20,
//   jop: "student",
// };

//function constration

/*
var Person = function (name, age, jop) {
  this.name = name;
  this.age = age;
  this.jop = jop;
};
var ahmed = new Person("ahmed", 20, "student");

console.log("object :>> ", ahmed.name);
*/

// Object.create

var personproto = {
  name: "ahmed",
  age: 20,
  jop: "student",
  YearOfBirth: function () {
    console.log("YearOfBirth :>> ", 2022 - this.age);
  },
};
ahmed = Object.create(personproto);
ahmed.age = 21;
ahmed.YearOfBirth;
