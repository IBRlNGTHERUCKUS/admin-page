const things=document.querySelectorAll(".truncated");
for (let thing of things) {
   thing.addEventListener("click", ()=>{
   thing.classList.toggle("truncated")})
}
