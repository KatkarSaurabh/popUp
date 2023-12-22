let openBtn = document.getElementById("open")
let closeBtn = document.getElementById("close")

openBtn.addEventListener("click",()=>{
    document.querySelector(".container").classList.add("active");
})
closeBtn.addEventListener("click",()=>{
    document.querySelector(".container").classList.remove("active")
})