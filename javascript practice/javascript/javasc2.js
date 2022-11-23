const name = "sakshi";
console.log(name);

// const name1="divya";
// const name2="sakshi";
// name2="ingole";
// console.log(name1);

// arithmatic oprator
const num1 = 10;
const num2 = 20;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

// relational/conditional operator
console.log(num1 == num2);
console.log(num1 <= num2);
console.log(num1 >= num2);
console.log(num1 != num2);

// logical operator
console.log(num1 > num2 && num1 < num2)
console.log(num1 > num2 || num1 < num2)

const nam = function (name) {
    console.log
}

// tr1=s"geetanjali is good girl";
// const name=str1

// let values=0;
// for( let i=0;i<=values;i+=2);
// {
//     values=i+2;
//     console.log(values);
// }

// forEach() method
a = [1, 2, 3, 4, 5, 6, 7, 8];
a.forEach((n, index) => {
    console.log(n * 2, index)

});

// map() method
const new2 = a.map((n) => {
    return n * n

});
// console.log(new2);

// //  filter() method
// a1=[1,2,3,4,5,6,7]
// even=filter
// reduce() method
arr = [1, 2, 3, 4, 5, 6, 7, 8]
newarr = arr.reduce((accumulator, current_value) => {
    return accumulator + current_value;
});
console.log(newarr);
const cart = [{
    name: "i-phone 13",
    id: 1,
    price: 130000

},
{
    name: "i-phone 14",
    id: 2,
    price: 180000

},
{
    name: "i-phone chaeger",
    id: 3,
    price: 3000

}];
total = cart.reduce((price, current_price) => {
    return price + current_price.price;
}, 0);
console.log(total);
// sort()/every()
// const number=[1,5,25,19,17,7];
const arrr = ["shailesh", "anil", "sagar"]
// console.log(number.sort());
console.log(arrr.sort());

const numbers2 = [1, 5, 25, 19, 17, 7]
const sorted = numbers2.sort((a, b) => {
    return (b - a);//decending
    return (a - b);//assending
});
console.log(sorted);

const products = [

    { item: "airpod", id: 1, price: 500 },
    { item: "headphone", id: 2, price: 1000 },
    { item: "bat", id: 3, price: 300 },
    { item: "i-phone", id: 4, price: 180000 }

]
// products.sort((a,b)=>{
//     return(a.price-b.price);
// })
// console.log(products);
// second method
// products.sort((a,b)=>a.price-b.price)
// console.log(products);
// products.sort((a,b)=>{
//         return(b.price-a.price);
//     })
//     console.log(products);

const all = products.every((a) => {
    return (a.price < 1000);
});
console.log(all);

//  const finded=products.find((a)=>{
//     return a.item=="i-phone";
//     return a.id==3;
//  })
//   console.log(finded);

// function use in object
// function callme(){
// console.log("sakshi")
// console.log(this);
// console.log(`${this.name},${this.age}`)

// }

// obj={
//     name:"sakshi",
//     age:22,
//     callme:callme
//     // callme:function()
// {
//     console.log(`my name is ${this.name} and my age is ${this.age}`)
//     console.log(this)
// }

// console.log(obj);
// console.log(obj.callme());
// obj2={
//     name:"divya",
//     age:23
// //     callme:callme
// }
// console.log(obj.callme());
// console.log(obj2.callme());
// console.log(this);
// callme.call();
// callme();
// obj.about();
// obj.about.call(obj2);

//bind,apply
// obj={
//     name:"divya",
//     age
// }
// advanced
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
// const user={
//     name:"divya",
//     age:23,
//     email:"ingolesakshi@gmail.com",
//     add:"nagpur",
//     about:userfunction.about,
//     is18:userfunction.is18
// }
// console.log(user);
// console.log(user.about());
// console.log(user.is18());
function createuser(name, age, email, add) {
    // user={}
    // user = Object.create(userfunction);//values give in proto
    user=Object.create(createuser.prototype);
    //when we pass the prototype inside the create function then it will show the proto


    user.name = name;
    user.age = age;
    user.email = email;

    user.add = add;
    // user.about=userfunction.about;
    // user.is18=userfunction.is18;
    return user;
}
const user1 = createuser("divya", 23, "divya@gmail.com", "nagpur");
// user1.about();
console.log(user1);
// console.log(user1);
// console.log(user1.about());
// console.log(user1.is18());
// console.log(user1.callme());
// console.log(user1.myadd());
// const user2 = createuser("geetu", 22, "geetu@gamil.com", "bhopal");
// console.log(user2);
// console.log(user2.about());
// console.log(user2.is18());
// const user3 = createuser("sakshi", 22, "sakshi@gamil.com", "nagpur");
// console.log(user3);
// console.log(user3.about());
// console.log(user3.is18());

// createuser.prototype.xyz="xyz";
// createuser.prototype.abc="abc";
// console.log(createuser.prototype);//wednesday prototype
createuser.prototype.about = function () {
    console.log(this.name, this.age)
}
createuser.prototype.is18 = function () {
    return this.age > 18;
}
createuser.prototype.callme = function () {
    console.log(this.name)
}
console.log(createuser.prototype);

// tuesday
const ob1 = {
    key1: "value1",
    key2: "value2"
}
// const ob2={
//     key3:"value3",
//     key4:"value4"
// }
// console.log(ob2.key3);
// console.log(ob2.key4);
// console.log(ob2.key1);
const ob2 = Object.create(ob1)
console.log(ob2)
// //new keys,chang
//object give us proto
//prototype give us function

function hello()//function + object
{
    console.log("hello");
}
console.log(hello.name);
console.log(hello.prototype)
hello.myprop = "this is property";
console.log(hello.myprop);
//new -{},return,no call
function hello1( name,age)
{
    // console.log("hello");
    this.name=name,
    this.age=age
} 
// const h1=new hello1();
const h1=new hello1("sakshi",23)
console.log(h1);
//prototype=function
//proto=object
//new=blank object{}