let container = document.querySelector(".container");
let icon = document.querySelector("#icon");

container.addEventListener("dblclick",function(){
    icon.style.transform = "scale(1)";
    icon.style.opacity = 1;

    setTimeout(function(){
        icon.style.transform = "scale(0)";
        icon.style.opacity = 0;
    },1500)
})