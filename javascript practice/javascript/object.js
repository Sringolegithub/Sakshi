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
//it is used to concat OR join  the value into two variables
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

