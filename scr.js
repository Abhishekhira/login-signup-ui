"use strict";
console.log('file is connected')
const signup=document.querySelector('.signup')
const container=document.querySelector('.container')
const container2=document.querySelector(".show")
const login =document.querySelector('.login')
console.log(container2)
console.log(container)
signup.addEventListener("click",()=>{container.classList.add("hide")
console.log('signup page is executed')
container2.classList.remove("hide")
}) 
login.addEventListener('click',()=>{
    container.classList.remove("hide")
console.log('login page is executed')
container2.classList.add("hide")

})