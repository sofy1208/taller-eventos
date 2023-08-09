document.addEventListener("DOMContentLoaded", function() {

let divElement = document.querySelector("div");

let btn = document.getElementById("btn");
    
btn.addEventListener("click", (e) =>  {
    alert("¡Hola!");
    e.stopPropagation();
});

divElement.addEventListener("click", () => {
    alert("¡Hola desde el div!")
});
});


