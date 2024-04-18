// *************** Coklu Kosullarla Calismak ***************

let userName = prompt("Kullanıcı Adınız:")
let age = prompt("Yaşınız:")
let info = document.querySelector("#info")

if (userName && age >=18) {
    info.innerHTML = "Ehliyet alabilirsiniz."
} else if (!userName){
    info.innerHTML = "Kullanıcı Adınız Yok"
} else if ( !(age >=18) ) {
    info.innerHTML = "Yaşınız Bilginiz Yok veya 18 Yaşından Küçüksünüz" 
} 