// let ve const ile degisken tanimlama

// var ile degisken tanimlamak:
// var serverName = "api.kodluyoruz.org"
// console.log(serverName)

// let ile degiskeni bos tanimlamak:
let serverName;
console.log(serverName)

// let ile degiskene bilgi atamak:
serverName = "https://kodluyoruz.org"
console.log(serverName)

//  let ile degiskene bilgi atayarak tanimlamak
let password = "1234";
console.log(password)

// degisken atamasi yapmadan once kullanmaya calismak:
/* hatalı kullanım:
console.log(fullName)
let fullName = "Mustafa Üzüm";
*/
let fullName = "Mustafa Üzüm";

// let ile tanimlanan degiskenin icindeki bilgiyi degistirmek:

fullName = "Lorem Ipsum Dolor"
console.log(fullName)

// birlestirme veya ekleme islemi:
fullName + "Yeni eklenen bilgi"
console.log(fullName + " Test Bilgisi")

fullName = fullName + " Yeni Bilgi"
fullName = "2: Bilgi" + fullName 

fullName = "Sifirlandi"
fullName += " ve Yeni Bilgi Eklendi"
console.log(fullName)

// const ile degiskeni bos tanimlamaya calismak :( :
// const serverPassword; //sadece degisken tanimlandi ama ici bos ??


// const ile degisken tanimlamak:
const SERVER_PASSWORD = "123456789"
console.log(SERVER_PASSWORD)

// SERVER_PASSWORD = "1234"
// console.log(SERVER_PASSWORD)

