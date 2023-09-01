let btn = document.querySelector("#btn");
let statuss = document.querySelector("#friend-status");
let check = 0;


btn.addEventListener("click", function(){
    if(check==0){
        btn.textContent = "Remove Friend";
        statuss.textContent = "Friend";
        statuss.style.color = "Green";
        check=1;
    }else{
        btn.textContent = "Add Friend";
        statuss.textContent = "Stanger"
        statuss.style.color = "red";
        check=0;
    }
})