console.log("hello world")
console.log("shailesh");

let name1="shailesh"
const name2="sakshi"
console.log(name2)
// name2="ingole"
// console.log(name2)

const num1=10;
const num2=20;

// arithmatic operators 
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);

// conditional and realtional operators 

console.log(num1 == num2 );
console.log(num1 != num2 );
console.log(num1 <= num2 );
console.log(num1 >= num2 );
console.log(num1 < num2 );
console.log(num1 > num2 );
console.log(num1 === num2 );

// logical operator
const no1=10;
const no2=20;

console.log(no1>no2&&no1<no2)
console.log(!false)

// ternary oprators
const number1=10;
const number2=20;
console.log(number1<number2 ? false:true)

// string
str="geetanjali is good girl" 
const name5=str.split(" ");
// console.log(name5.length);
// console.log (name5.slice(0,2));
// console.log(name5[0]);
// console.log(name5.charAt(0));
// console.log(name5.toUpperCase());
// console.log(name5.toLowerCase());
console.log(name5);
console.log(typeof name5);

// string to integer
const n="56";
console.log( typeof n)

// if-else program conditional statement
let nu=10;
if(nu>=10)
{
    console.log("the number is greater ")
}
else{
    console.log("the number is not greater")
}
// nested if else statement-
let a=10,b=20,c=30;
if(a>b)
{
    if(a>c)
    {
        console.log("a is greater")
    }
    else{
        console.log("c is not greater")
    }
}
else
{
    if(b>c)
    {
         console.log("b is greater") 
    }
    else{
        console.log("c is greater")
    }
}
// ladder if else
// let v=5,w=6,x=7;
// if(v>w&&v>x)
// {
//     console.log("v is greater")
// }
// else-if (w>v&&w>x)
// {
//     console.log("w is greater")
// }
// else
// {
//     console.log("x is greater")
// }

// switchcase program
const alpha="g "
switch(alpha)
{
    case"g":
    console.log("g is vowel");
    break;

    default:
        console.log("g is consonant")
}


// let i=0;
// for(true);
// {
//     console.log()
// }
// addition of values with the use of for loop
//   add=0;
 
//  for(let i=1;i<=10;i++);
//  {
//      add=add+i;
//      console.log(add);
//  }
// addition of value with the use of while loop
// let i=0;
// while(i<=10)
// {
//     console.log(i);
//     i++;
// }
// wap to print even no from 1 to 20
// let values=20;
// for( let i=0;i<=values;i+=2);
// {
//     values=i+2;
//     console.log(values);
// }

// array funtion in javascript
let arr1=["ramesh","suresh","anil"]
console.log(arr1)
let arr2=[1,2,3,4,5]
console.log(arr2)
let arr3=["ramesh",25,"anil",30]
console.log(arr3)
let arr4=[[1,2,3],[4,5,6],"ramesh"]
console.log(arr4)
// slice,pop,push,shift unshift in array
let names=["ramesh","sagar","anil"]
console.log(names.slice(0));
console.log(names.push("shail"));
console.log(names.shift());
// const popped= names.pop();
// console.log(popped);
// const pushed=names.push("shailesh")
// console.log(pushed);
// const shifted=names.shift();
// console.log(shifted);

// added one array to another array
let a1=[1,2,3,4,5];
let a2;
a2=a1;
console.log(a2);
// for in loop
let namess=["anil","ramesh","sagar"]
for(let i in namess)
{
    console.log(i);
}
// for off loop
let namess2=["anil","ramesh","sagar"]
let num=[1,3,5]
for(let n of num)
{
    // console.log(name.toUpperCase());
    console.log(n*3)

}
// object
const obj={
    name:"sakshi",
    age:22,
    hobbies:["roaming","drawing","reading"]
}
console.log(obj.name);
console.log(obj.age);
const arrr=obj.hobbies;
for(let arrrr of arrr){
    console.log(arrrr);
}

// add some another values
const obj1={
    name1:"divya",
    age2:22
}
obj1.gender="female";
console.log(obj1);

// add some another value (properties of object)
 let key="email";//key always in string
const obj2={
    name3:"sashi",
    age3:22,
    my_hobbies:["dancing","singing","playing"]
}
console.log(obj2.my_hobbies);
//  obj2.email=email;
obj2[key]="ingolesakshi1@gmail.com";
console.log(obj2);

// how to access the keys
const obj3={
    name4:"geetu",
    age4:23,
    email1:"xyz@gmail.com"
}

for(let key in obj3){
     console.log(`${key}:${obj3[key]}`);
    // console.log(obj3[key]);
    // console.log(Object.keys(obj3));
    // console.log(Object.values(obj3));
} 

console.log(Object.keys(obj3));
 console.log(Object.values(obj3));

//  const obj4={
//     name5:"vivek",
//     age:24

//  }
//  for(let key2 of Object.keys(obj4));
//  {
//     console.log(obj4[key2]);
//  }

 let key_one="name";
 let key_two="age";
 let value_one="gaurav";
 let value_two=23
 const obj5={
    [key_one]:value_one,
    [key_two]:value_two
 }
 console.log(obj5)

//  spread oprator array(...)
const a12=[1,2,3];
const a13=[4,5,6];
const a14=[...a12,...a13];
console.log(a14);

// spread oprator object
const obj6={
    key1:"value1",
    key2:"value2"
}
const obj7={
    key3:"value3",
    key4:"value4"
}
const obj8={
   ...obj6,
   ...obj7,
   key5:"value5"
}
console.log(obj8);

// spread oprator destructuring
const obj9={
    name:"pranali",
    age:25,
    gender:"female",
    email:"pranali@gmail.com"
}
const{name,age,...restProps}=obj9
console.log(name);
console.log(age);
console.log(restProps);

// FUNCTION
console.log(123)
function call_my_name() {
    // console.log("sakshi")
    return "pranali"
}
 console.log(call_my_name());

// second method to call function
 const call_meee=function(){
    console.log("sakshyyyy");
 }
   call_meee();

//    arrow function
const my_function=()=>{
    console.log("vaishnavi");
}
my_function();

// function with parameter
function add(a,b){
    console.log(a+b);
}
add(5,6);
// second method
function add1(c,d){
    return c+d;
}
console.log(add1(5,6));
// third method
const add3=(e,f)=>{
    console.log(e+f)
}
add3(1,2)
// fourth method
const add4=function(g,h){
    console.log(g+h)
}
 add4(2,4); //argument    
// for negative value
// function with parameter
function f(a){
    console.log(a>0);
}
f(5);
// second method
function f1(c){
    return c<0;
}
console.log(f1(6));
// third arrow method 
const f3=(e)=>{
    // console.log(e<0)
    return e<0;
}
console.log(f3(4))
// f3(-3)
// fourth method
const f4=function(g){
    console.log(g>0)
}
 f4(-25); //argument
//  return fu    
 const f5=function(v){
    return v>0;
 }
 console.log(f5(40));

// odd value /even value
const f6=function(s){
    // console.log(s%2==0)
    if(s%2==0)
    {
        console.log("s is even")
    }
    else{
        console.log("s is odd")
    }
}
f6(6);
// method2
const f7=function(c){
    return c%2==0;
}
console.log(f7(7));
// arrow method
const f8=(d)=>{
    if(d%2==0)
    {
        console.log("d is even")
    }
    else{
        console.log("d is odd")
    }
}
f8(20);
// function with parameter
function f(w){
    if(w%2==0)
    {
        console.log("w is even")
    }
    else{
        console.log("w is odd")
    }
    }
f(55);
// find the length with the use of function
const find_char=(s)=>{
    return s[0];
    return s.length;

}
console.log(find_char("sakshi"))
// hoisting
my_fu();
function my_fu(){
    console.log("my_fu called");
}
// my_fu();
// with the use of arrow function
// my_fuc();
// const my_fuc=()=>{
//     console.log("my function called")
// }
// my_fuc();
// with the use of string
console.log(nae);
// const nae="sakshi";
var nae="sakshi"
// console.log(nae);

// function inside function
// const my_funct=()=>{
//     const a=10;
//     console.log("called 1",a);
//     const in_fu=()=>{
//         console.log("called 2",a);
//     }
//     const in_fu2=()=>{
//         console.log("called 3")
//     }
//     in_fu();
//     in_fu2();
// }
// my_funct();
// lexical scope
const value=10;
const my_funct=()=>{
    // const value=10;
    console.log("called 1",value);
    const in_fu=()=>{
        // const value=20
        console.log("called 2",value);
    }
    const in_fu2=()=>{
        console.log("called 3")
    }
    in_fu();
    in_fu2();
}
my_funct();
// call_back function
function myy_fu(a){
    console.log("called myy_fu")
    // console.log(callback)
    a();
}
function myy_fu2(){
    console.log("called myy_fu2")
}
myy_fu(myy_fu2);
// find first char of string using callback function

