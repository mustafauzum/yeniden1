// *********** liste icindeki ogeye ulasmak veya yeni oge eklemek ***********

let lastChild = document.querySelector("ul#list>li:last-child")
lastChild.innerHTML = "son oge degisti..."

let firstChild = document.querySelector("ul#list>li:first-child")
firstChild.innerHTML = "ilk oge degisti..."

let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement('li')

liDOM.innerHTML = "Kendi olusturdugumuz oge..."

// ulDOM.append(liDOM // en sona ekler)
ulDOM.prepend(liDOM)

