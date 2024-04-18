// ****************** DOM Icinden Oge Secimi ******************

// https://developer.mozilla.org/en-US/docs/Web/API/Doucemnt/getElementById
// https://developer.mozilla.org/en-US/docs/Web/API/Doucemnt/querySelector

// let h2 = document.getElementByTagName('h2')
let title = document.getElementById('title')
title.innerHTML = "Degisen Bilgi"
console.log(title.innerHTML)

let link = document.querySelector("#kodluyoruzLink")
link.innerHTML += " Değişti"
link.style.color = "red"
link.classList.add('btn')