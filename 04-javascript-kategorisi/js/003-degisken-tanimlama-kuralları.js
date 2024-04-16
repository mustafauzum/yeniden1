// ************* Degisken tanimlama kurallari *************
// https://www.w3schools.com/js/js_conventions.asp
// https://google.github.io/styleguide/jsguide.html#features-local-variable-declarations
// https://www.robinwieruch.de/javascript-naming-conventions

// ### Degisken Genel Tanimlama Kurallari
// camelCase Kullanimi
let fullname = "" // bu degil
let kodluyoruzseverinfo = "" // bu degil
let kodluyoruz_server_info = "" // bu degil
let fullName = ""
let kodluyoruzServerInfo = ""
let kodluyoruzSERverInfo = "" // bu dogru kullanim degil

// UPPER_CASE Kullanimi:
const password = "1234" // bu dogru kullanim degil
const PASSWORD = "1234" // dogru kullanim
const SERVER_PASSWORD = "1234"

// degiskenlerde turkce ve diger dillerin kullanimi:
let türkçeBilgi = 'Türkçe Bilgi Yazdırılıyor..' // bu dogru kullanim degil
console.log(türkçeBilgi)


// anlamsiz degisken adlari kullanmayin!
// https://stackoverflow.com/questions/184618/what-is-the-best-comment-in-source-code-you-have-ever-encountered
// When I wrote this, only God and I understood what I was doing
// Now, God only knows


// ### Ek Bilgi:
// 1: boolean tanimlarken is/has kullanimi


// 2: Line Length < 80