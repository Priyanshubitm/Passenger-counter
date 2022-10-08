 // document.getElementById("count-el").innerText =7;
// dom :-document object model
// let count=0

// console.log(count)
let countEl= document.getElementById("count-el") // psss in  arguement

// console.log(countEl)

let person_ct=0
function increment() {
    console.log("clicked for increment")
    person_ct+=1
    countEl.innerText = person_ct
    console.log(person_ct)
} 

function decrement() {
    console.log("clicked for decrement")
    person_ct-=1
    countEl.innerText = person_ct
    console.log(person_ct)
} 

function save(){
    console.count(person_ct)
}


