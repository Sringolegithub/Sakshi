//looping------------------12/10/22
//for loop

for(let i=0; i<=10; i++ ){
console.log(i);
}

//while loop
let i=0;
while(i<10){
    console.log("sakshi")
    i++;
}

//do while loop




// for in loop-get indexing
let namess = ['anil', 'sahil', 'sagar']
for (let nam in namess) {
    // console.log(i.toUpperCase());
    console.log(namess[nam]);

}
// for off loop
let namess2 = ["anil", "ramesh", "sagar"]
let num = [1, 3, 5]
for (let n of namess2) {
    console.log(n.toUpperCase());
    // console.log(n*3);

}

// object
const obj = {
    name: "sakshi",
    age: 22,
    hobbies: ["roaming", "drawing", "reading"]
}
console.log(obj.name);
console.log(obj.age);
const arrr = obj.hobbies;
for (let arrrr of arrr) {
    console.log(arrrr);
}
//add some value
const obj1 = {
    name1: "divya",
    age2: 22
}
console.log(obj1.name1);
console.log(obj1.age2);

obj1.gender = "female";
obj1.email = "ingolesakshi1@gmail.com"
console.log(obj1.gender);
console.log(obj1.email);
//add key
const key = "email"//key always in string
const obj2 = {
    name: "sakshi",
    age: 22,
    hobb: ["draw", "rom", "play"]
}
for (let key in obj2) {
    console.log(`${key}:${obj2[key]}`);//print key with there values
    //  console.log(obj2[key]);
    // console.log(Object.keys(obj2));
    // console.log(Object.values(obj2));

}
for (let key2 in Object.keys(obj2)) {
    console.log(obj2[key2])
}

obj2[key] = "sakshi@gmail.com";
// console.log(obj2.email)
console.log(obj2.email);

let key_one = "name";
let key_two = "age";
let value_one = "gaurav";
let value_two = 23
const obj5 = {
    [key_one]: value_one,
    [key_two]: value_two
}
console.log(obj5)

///practice new keyword
const userfunction = {
    about: function () {
        console.log(this.name, this.age)
    },
    is18: function () {
        return this.age > 18;
    },
    callme: function () {
        console.log(this.name)
    },
    myadd: function () {
        console.log("my address is ");
    }
}

// function createuser(name, age, email, add) {
//     // user={}
//     // user = Object.create(userfunction);//when use (object.create) it will give proto
//          // //Object.create(give blank object)
//          // //--proto(object)
//           // //--prototype(function)
//     // user=Object.create(createuser.prototype);
//     //when we pass the prototype inside the create function then it will show the proto


//     this.name = name;
//     this.age = age;
//     this.email = email;

//     this.add = add;
//     // user.about=userfunction.about;
//     // user.is18=userfunction.is18;
//     return this;

// }

// const user1 = new createuser("divya", 23, "divya@gmail.com", "nagpur");
// // user1.about();
// console.log(user1);
// for (let key in user1) {
//     // console.log(keys);
//     if (user1.hasOwnProperty) {
//         console.log(key);
//     }
// }

// createuser.prototype.about = function () {
//     console.log(this.name, this.age)
// }
// createuser.prototype.is18 = function () {
//     return this.age > 18;
// }
// createuser.prototype.callme = function () {
//     console.log(this.name)
// }
// console.log(createuser.prototype);

//

//array it is function
//1
const numberss = [1, 2, 3, 4]
console.log(numberss);
console.log(Object.getPrototypeOf(numberss));
//2
const numberss1 = new Array(1, 2, 3, 4)
console.log(numberss1)

// class ;-it is used to bind the data
class createuser {
    // constructor is a special charecter it is used initialized the object
    constructor(name, age, add, email) {
        this.name = name;
        this.age = age;
        this.add = add;
        this.email = email
    }
    about() {
        console.log(this.name, this.age)

    }

    is18() {
        return this.age > 18;
    }
    callme() {
        console.log(this.name)
    }
}
const user11 = new createuser("divya", 23, "divya@gmail.com", "nagpur")
console.log(user11);
