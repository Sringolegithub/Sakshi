// $("heading").addclass("background-black")// const URL="https://jsonplaceholder.typicode.com/posts";
// fetch("https://jsonplaceholder.typicode.com/posts").then((response)=>response.json())
// .then((data)=>{
//     // data.forEach(element => {
//         // console.log(element);
//         console.log(data)});
//         // var title= element.title;
//         // var description= element.body;
//         // var id = element.userId;
// });
// });
// // const id=document.querySelector("#id")
// // console.log(id);

fetch("https://jsonplaceholder.typicode.com/posts").then((response)=>response.json()
).then((data)=>{
    console.log(data)
})


// $("#xyz").text()
// ad
// $("#heading").removeClass("background-white");

// function bg_white() {
//     $("#heading").removeClass("background-black");
//     // $("#heading").text("bacground-white")

//     $("#heading").addClass("background-white");
// }
// // document.getElementById("bgW").addEventListener("click", bg_white());

// function bg_black() {
//     $("#heading").addClass("background-black");
//     // $("#heading").text("bacground-black")

//     $("#heading").removeClass("background-white");
// }
// document.getElementById("bgB").addEventListener("click", bg_black());



// //ajax
// const obj = {
//     id:101,
//     userId:5050,
//     title:"ABC",
//     body:"my nme us"
// }
// console.log("hi");
// function POST()
// {
//     $.ajax({
//     type:"POST",
//     data:obj,
//     url:"https://jsonplaceholder.typicode.com/posts",
//     // content:"application/json",
//     success:function(responce){
//         console.log(responce);
//     },
//     error:function(error) {
//         console.log(error);

//     }
// })

// };

// //post method
// $.post('https://jsonplaceholder.typicode.com/todos/1', {

//     id: 101,
//     userId: 5050,
//     title: "ABC",
//     body: "my nme us"

//     // function: post(data, status)
//     // {
//     //     alert(status)
//     // }
// });



// function POST(data, status) {
//     alert(status)
//     // url:"https://jsonplaceholder.typicode.com/posts",
//     // success:function(responce){
//     //             console.log(responce);
//     //         },
//     // error: function(error) {
//     //     console.log(error);

// }


//on method
// $('p').on('click',function(){
//     console.log("thanks for clicking")
// })

// $('#para').hide(1000 ,function(){
//     console.log('hidden')
// })
// $('#para').show(1000,function(){
//     console.log('showed')
// })

// $("#but").click(function () {
//     $("#para").toggle(1000,function(){
//         // console.log('thanks for visiting')
//     });
// })

//fadein()/fadeout()/fadetoggle()/fadeto()
// $('#but').click(function () {
//     $('#para').fadeToggle(1000)
//     // $('#para').fadeTo(1000)
//     // $('#para').fadeOut(1000)
//     // $('#para').fadeIn(1000)
// })

// //sliding function-callabck methods are otional
// $('#but').click(function () {
// // $('#para').slideUp(1000)

// // $('#para').slideDown(1000)
// $('#para').slideToggle(1000)

// })

//animate function
// $('#para').animate({
//     opacity:0.3,
//     // height:'150px',
//     // width:'350px'
// },2000);

// //Q -function in animate function
// $('#para').animate({opacity:0.3},4000);
// $('#para').animate({opacity:0.9},4000);
// $('#para').animate({height:'150px'},1000);
// $('#para').animate({width:'350px'},2000);
