// *********** Kosullarla Calismak ***********
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

let username = prompt("Kullanıcı Adınızı Giriniz:")
// eger kullanici bilgisi varsa ekrana ismini yazdir 
// eger (username.length > 0) {console.log(username)} degilse {onsole.log("bilgi yok")}
// if (username.length > 0) {console.log(username)} else {onsole.log("bilgi yok")}

if (username.length) { // if kismi her zaman true ise calisir
    console.log(`Kullanıcı Bilginiz ${username}`)
}else{
    console.log("Bilgi Yok")
}
