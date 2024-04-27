// INPUT icindeki degeri(value) almak

let fromDOM = document.querySelector("#userForm")
fromDOM.addEventListener('submit', formSubmit)


function formSubmit(event) {
    event.preventDefalt() // default islemi engelledik
    console.log("islem gerceklesti")
    
    let scoreInputDOM = document.querySelector('#score')
    console.log(scoreInputDOM.value)
    localStorage.setItem('score', scoreInputDOM.value)
}