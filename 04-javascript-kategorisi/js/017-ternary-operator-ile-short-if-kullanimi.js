// ************** ternary operator ile short if kullanimi **************

// Eğer kullanıcı adın varsa yazdır yoksa kullanıcı bilginiz bulunamadı yaz

let userName = prompt("Kullanıcı Bilginizi Yazınız")
let info = document.querySelector("#info")

// ternart kullanımı:
// koşul ? doğruysa: yanlışsa

// userName.length > 0 ? userName : "Kullanıcı Bilginiz Bulunamadı :("

info.innerHTML = `${userName ? userName : "Kullanıcı Bilginiz Bulunamadı :("}`