
// FUNCTION
//function is a block of statement
console.log(123)
//first method -to call function-define function
function call_my_name() {
    // console.log("sakshi")
    return "pranali"
}
 console.log(call_my_name());

// second method -to call function
//(expresive function)
 const call_meee=function(){
    console.log("sakshyyyy");
 }
   call_meee();

//   third method- arrow function
// (ES6,recommend)
const my_function=()=>{
    console.log("vaishnavi");
}
my_function();

// function with parameter
//define(parameters)
//call(argument)
function add(a,b){
    console.log(a+b);
// console.log    
}
add(5,6);
// fwp-second method
function add1(c,d){
    return c+d;
}
console.log(add1(5,6));
// fwp-third method
const add3=(e,f)=>{
    console.log(e+f)
}
add3(1,2)
// fwp-fourth method
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

//first-m
function myy_fu(a){
    console.log("called myy_fu")
    // console.log(callback)
    a();
}
function myy_fu2(){
    console.log("called myy_fu2")
}
myy_fu(myy_fu2);

//second-
function f(name){
    // console.log("salshi")
    console.log(name)
}
// f();
f("sakshi")

//third-function as parameter
// function calleveryone(){
//     console.log("sakshi","geetu","pallu","sweety")
// }

// function 

// // find first char of string using callback function
// function myy_fu(){
//      console.log("called myy_fu")
//     // console.log(s)
    
    
// }
// const name0="sakshi"
// function myy_fu2(){
//     console.log(name0[0])
// }
// myy_fu(myy_fu2);

// a=[1,2,3,4,5,6,,7,8];
// a.forEach((n,index) => {
//     console.log(n*2,index)

// });

// annonomas function