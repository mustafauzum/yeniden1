// Local Storage Islemleri:

let user = {userName: "mustafauzum", isActive: true}
console.log(user)
localStorage.setItem(`userInfo`, JSON.stringify(user)  )


let userInfo = localStorage.getItem(`userInfo`) // bilgiyi al
userInfo = JSON.parse(userInfo)
console.log(userInfo)