// array map kullanimi
// https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const USERS = ["ERTUGRUL", "EmreCan", "ArZU", "MuRAT"]

// userName icinde orhinal isim kalsin,
// shortName icinde ilk harf buyuk . (E.)
// newName icinde ilk harf buyuk olsun
// {userName: "ERTUGRUL", shortName: "E.", newName: "Ertugrul"}

const NEW_USERS = USERS.map( user => user.toLowerCase() )
console.log(NEW_USERS)

// const USERS_OBJ = USERS.map( item =>
//   {
//     return {
//       userName: item, shortName: `${item[0]}.`, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
//     }
//   } 
// )

const USERS_OBJ = USERS.map( item => (
    {userName: item, shortName: `${item[0]}.`, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase}`}
    )
)

console.log(USERS_OBJ)