// const contan=document.querySelector(".container")
// console.log(contan.classList)
// // console.log
// contan.classList.add("bgdark")

// let light = document.getElementById("lightm");
// light.classList.remove (".display");
// // light.style.display="none"

// function darkmode() {
//     const contan = document.querySelector(".container")
//     contan.classList.add("bgdark")
//     // console.log(contan.classList)
//     const light = document.querySelector(".display")
//     light.classList.remove(".display")
//     // light.style.display="none";
//     // const dark = document.querySelector("bgdark")
//     const dark = document.querySelector(".display")
//     // light.classList.remove(".display-none")
//     dark.classList.add(".display")
//     // dark.style.display=" ";
    


//     // console.log
//     // contan.classList.add("bgdark")
// }
// document.getElementById("darkm").addEventListener("click",darkmode);

// function lightmode() {
//     const contan = document.querySelector(".container")
//     contan.classList.remove("bgdark")
//     // console.log(contan.classList)
//     const light = document.querySelector(".display")
//     // const dark = document.querySelector("bgdark")
//     const dark = document.querySelector(".display")

//     light.classList.add(".display")
//     // light.style.display=" ";
//     dark.classList.remove(".display")
//     // dark.style.display="none";
    
//     // light.style.display=" ";
    

// }
// document.getElementById("lightm").addEventListener("click",lightmode);

////mymymymymymymy

let light=document.getElementById("lightm");
light.style.display="none";

function darkmode(){
    const contan = document.querySelector(".container")
     contan.classList.add("bgdark")
    //  const light1 = document.querySelector(".display-none")
    // const dark1 = document.querySelector("bgdark")
    // light1.classList.remove("display-none")
    // dark1.classList.add("display-none")
    
    // let para =document.getElementById("heading");
    // heading1.style.display="none";
    let dark=document.getElementById("darkm");
    dark.style.display="none";
    let light=document.getElementById("lightm");
    light.style.display="";
    

}
document.getElementById("darkm").addEventListener("click",darkmode);

function lightmode(){
    const contan = document.querySelector(".container")
    contan.classList.remove("bgdark")
    // const light1 = document.querySelector(".display-none")
    // const dark1 = document.querySelector("bgdark")
    // light1.classList.add("display-none")
    // dark1.classList.remove("display-none")

  
//    const heading1=document.getElementById("heading");
//    heading1.style.display="";
   const light=document.getElementById("darkm");
   light.style.display="";
   let dark=document.getElementById("lightm");
   dark.style.display="none";
  
}
document.getElementById("lightm").addEventListener("click",lightmode);