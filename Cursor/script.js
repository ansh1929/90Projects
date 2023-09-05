let cursor = document.querySelector(".cursor");

let body = document.querySelector("body");

body.addEventListener("mousemove",function(e){
    cursor.style.left = e.x + "px"
    cursor.style.top = e.y + "px"
}
)