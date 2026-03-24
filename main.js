let button = document.querySelector(".my-button");

let menu = document.querySelector(".sandwich");
let close = document.querySelector(".close");



let links = document.querySelector(".links");

let link = document.querySelectorAll(".links ul li a");


link.forEach(a => a.addEventListener("click", function() {
    link.forEach(a => a.classList.remove("colorChanger"));
    this.classList.add("colorChanger");

}))

function toggle(){
    menu.classList.toggle("none");
    close.classList.toggle("none");
    links.classList.toggle("opacity-none");
}

button.addEventListener("click" , toggle)

button.addEventListener("blur" , function(){
    menu.classList.remove("none");
    close.classList.add("none");
    links.classList.add("opacity-none")

})

let article = document.querySelectorAll("article");

article.forEach(e =>e.addEventListener("click" , function(){
    article.forEach(function () {location.href="#"})
}))

let request = document.querySelectorAll(".request")

request.forEach(e =>e.addEventListener("click" , function(){
    request.forEach(a => a.classList.remove("hover"));
    this.classList.add("hover");

    location.href="#"
}))

request.forEach(e =>e.addEventListener("blur" , function(){
    request.forEach(e => e.classList.remove("hover"))
}))
