// *************** Template Literals Kullanimi ***************
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

let username = "Mustafa"
const DOMAIN = "kodluyoruz.org"

let email = username + "@" + DOMAIN

// console.log("Merhaba", username, "Sitemize Hosgeldin", "Mail adresin:", email)

let info = `
Merhaba ${username} sitemize hoşgeldin.. 
Mail adresin: ${email}

mail adresinin uzunluğu: ${email.length}
borcunuz: ${(2 + 3) * 10} TL
Günün saat bilgisi: ${new Date().getHours()}

kısa isminiz: ${username[0]}.
`

console.log(info)