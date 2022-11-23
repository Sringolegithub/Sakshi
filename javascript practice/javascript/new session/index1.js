// console.log("divya");
// // DOM
// console.log(document);
// console.dir(window.document);

// //how to access the class and id from html
//  console.log(document.getElementById("header"));
//  console.log(document.getElementsByClassName("header"));
//  console.log(document.querySelector(".header"));
// console.log(document.querySelector("#header"));


// const p=document.querySelector("#a");
// console.log(p);
// // //textcontent used for access the values
// p.textContent="abc";
// p.textContent="ABC";
// p.style.backgroundColor="red";
// console.log(p.style)

// console.log(document.querySelectorAll(".nav_link"));
// // console.log(document.querySelecstorAll("li a"))
// // console.log(document.querySelector("Nav-link"));
// console.log(document.querySelector("li"));


// const li=document.querySelectorAll("li");
// for(list of li){
// list.style.backgroundColor="orange";
// }
// console.log(li);

// const li=document.getElementsByClassName(".Nav-link");
// for(list of li){
//     list.style.backgroundColor="blue";
// }
// console.log(li);


//------------2nd type----------
// const li1=document.querySelectorAll("li");
// for (let i = 0; i < li1.length; i++) {
//     li1[i].style.backgroundColor="red";
//     }
//     console.log(li);

    // for(list of li){
    //          list.style.backgroundColor="blue";
    //      }
    //      console.log(li);


        //  const a=document.querySelector("a");
        //  const attr1=a[1].getAttribute("href");
        //  attr1.setAttribute("href","https//google.com");
        //  console.log(a[1].getAttribute("href"));
        //  console.log(a.setAttribute("href","https//google.com"));

// function abc(){
//     console.log("clicked");
    
    // const h1=document.querySelector("heading")
    // h1.style.display=" ";
//}
// document.getElementById("clickme").addEventListener("click", function (){
//     console.log("clicked");
// });
// //  clickme();

// // // hide()
// function show(){
//     console.log("clicked");
//     const h1=document.querySelector("heading")
//     h1.style.display= "none";
// }
// show() 


// //  clickme();
// document.getElementById("clickme").addEventListener("click", function(){
//     console.log("clicked");
// });



// hide show inverse operation;
// let show = document.getElementById("btn2");
// show.style.display = "none";

// document.getElementById("#btn1").addEventListener("click", function () {
//     let heading = document.getElementById("Heading");
//     heading.style.display = "none";
//     let hide = document.getElementById("btn1");
//     hide.style.display = "none";
//     let show2 = document.getElementById("btn2");
//     show2.style.display = "";
// })
// document.getElementById("#btn2").addEventListener("click", function () {
//     let heading = document.getElementById("Heading");
//     heading.style.display = "";
//     let show2 = document.getElementById("btn2");
//     




// })

// const root=document.getRootNode();
// console.log(root);


// const html=root.childNodes[1];
// console.log(html);
// const child=html.childNodes;
// console.log(child);
// const headnode=child[0];
// console.log(headnode.nextSibling)

//  const headelement=html.childNodes[0];
// console.log(headelement);
// const  headsibling1=headelement.nextSibling.nextSibling;
// console.log(headsibling1);
// // const bodychild=childNodes;
// console.log(headsibling1.childNodes)
// console.log(root.childNodes)

//inner html

// const mylist1=document.querySelector(".mylist");
// console.log(mylist1.innerHTML);
// mylist1.innerHTML+="<li>item3</li>";

// create element have 3 methods 
// const mylist=document.querySelector(".mylist");
// const myitems=document.createElement("li");
// myitems.textContent="item1";
// mylist.append(myitems);

// //3rd type---->beforeend,beforebegin,afterbegin,afterend-->
// const mylist=document.querySelector(".mylist");
// mylist.insertAdjacentHTML("beforeend","<li>item3<li>");

// //synchronous -execute step wise
// console.log("start");

// for(let i=0;i<=10;i++)
// {
//     console.log(i);
// }
// console.log("end");

// //setTimeOut(function(),time)-it is use to execute the endlast
// //stack:- LIFO refers to Last In First Out.
// //queue:-FIFO refers to First In First Out.

//asynchronous-execute asynchronounsly(queue)
// console.log("start")
// function loop(){
//     for(i=0;i<=10;i++)
//     {
//         console.log(i)
//     }
//     console.log("mid")

// }
// setTimeout(loop,1000)
// console.log("end")

//API(it is a source(url)):-application programming interface
const URL="https://jsonplaceholder.typicode.com/posts"

fetch('https://jsonplaceholder.typicode.com/todos/1').then((responce)=>{
    responce.json();
})
.then((data)=>{
    console.log(data)
})
//   .then(response => response.json())
//   .then(json => console.log(json))






  