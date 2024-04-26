// DOM Etkinlikleriyle Calismak
// https://www.w3schools.com/jsref/dom_obj_event.aspm
// https://developer.mozilla.org/en-US/docs/Web/Events

let greeting = document.querySelector("#greeting")
greeting.addEventListener("click", domClick)

function domClick(){
    console.log("Etkinlik Denetlendi")
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red"
}