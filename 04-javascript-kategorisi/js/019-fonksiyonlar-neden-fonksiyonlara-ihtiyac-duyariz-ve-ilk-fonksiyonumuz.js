// ** Ilk Fonksiyonumuzu Tanimlamak:

function helloWorld(){
    console.log("Hello World")
}

function hello() {
    console.log("Merhaba")
    helloWorld()
}


// hata alabiliriz...
// function userCheck( {
//     if (userName && age >=18) {
//         info.innerHTML = "Ehliyet alabilirsiniz."
//     } else if (!userName){
//         info.innerHTML = "Kullanıcı Adınız Yok"
//     } else if ( !(age >=18) ) {
//         info.innerHTML = "Yaşınız Bilginiz Yok veya 18 Yaşından Küçüksünüz" 
//     } 
// })


hello() // calistir
