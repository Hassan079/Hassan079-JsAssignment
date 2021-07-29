//  Task:01

let itemsArray = [
    { name: 'juice', price: '50', quantity: '3' },
    { name: 'cookie', price: '30', quantity: '9' },
    { name: 'shirt', price: '880', quantity: '1' },
    { name: 'pen', price: '100', quantity: '2' }
];

// For Total Price of each item

let totalPriceOfEach = [];

itemsArray.map((element) => {
    let sum = Number(element.price) * Number(element.quantity)
    totalPriceOfEach.push(sum);
})

totalPriceOfEach.map((element) => {
    console.log(`Total price of each item is ${element}`)
})

// For total price of all items

let totalPrice = 0;

totalPriceOfEach.map((element) => {
    totalPrice += element;
})

console.log(`Total Pice of all items is ${totalPrice}`);


   //  Task:02

   var Person = {

    name: "Hassan Nadeem",
    email: "hn178139@gmail.com",
    password: "ninezero",
    age: 20,
    gender: "Male",
    city: "Karachi",
    country: "Pakistan",

}
if ("name" in Person  && "country" in Person && "age" in Person   == true) {
    console.log("Name,Age & country exist in Record")
} else {
    ("Name,Age & country not exist")

}

// Task: 03


function Employee(name, gender, employeeNo, profession) {
    this.name = name;
    this.gender = gender;
    this.employeeNo = employeeNo;
    this.profession = profession;
}

var Employee1 = new Employee("Hammad", "Male", 4322, "Business")
var Employee2 = new Employee("Umair", "Male", 4323, "Marketer")
var Employee3 = new Employee("Fatima", "Female", 4324, "Developer")


console.log(Employee1, Employee2, Employee3)


Task: 04
function Area(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

function setData(event) {

    event.preventDefault();
    var personName = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var education = document.getElementById("Education").value;
    var profession = document.getElementById("Profession").value;

    if ((personName.length && address.length && education.length && profession.length) == 0) {
        console.log("Please fill the correct fields");
    }
    else {
        var male = document.getElementById("male");
        var female = document.getElementById("female");

        if (male.checked) {
            var g = "male";
        } else if (female.checked) {
            var g = "female";
        }

        let myArea = new Area(personName, g, address, education, profession);
        console.log(myArea);
    }

}

