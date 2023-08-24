const showbtn = document.querySelector("#Submit");
const closebtn = document.querySelector("#Close");
const popup = document.querySelector(".popup");

showbtn.addEventListener("click",function(){
    popup.classList.toggle("show-popup");
});

closebtn.addEventListener("click",function(){
    popup.classList.toggle("show-popup");
});