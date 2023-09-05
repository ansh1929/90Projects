let element = document.querySelectorAll(".elem")

element.forEach((tag)=>{

    tag.addEventListener("mouseenter",function(e){
        tag.childNodes[3].style.opacity = 1;
    })

    tag.addEventListener("mouseleave",function(e){
        tag.childNodes[3].style.opacity = 0;
    })

    tag.addEventListener("mouseover",function(e){
        tag.childNodes[3].style.left = e.x+"px";
        tag.childNodes[3].style.top = e.y+"px";
    })
})


// let jarvis = document.querySelector("#jarvis");
// let img = document.querySelector("#jarvis img");

// console.log(jarvis , img);

// jarvis.addEventListener("mousemove",function(dets){
//     img.style.left =dets.x+"px"
//     img.style.top =dets.y+"px"
// })


// jarvis.addEventListener("mouseenter",function(dets){
//     img.style.opacity = 1
// })

// jarvis.addEventListener("mouseleave",function(dets){
//     img.style.opacity = 0
// })