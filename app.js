const contain = document.body.querySelector("#container");


const button = document.body.querySelector("#btn");

button.addEventListener("click",()=>{
    if(contain.classList.contains("overlay")){
        contain.classList.remove("overlay")
    }
    else{
        contain.classList.add("overlay");
    }
})