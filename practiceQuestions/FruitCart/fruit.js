let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

let

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.


function SortFruit(){
    for(let i=0;i<(fruit.length-1);i++){
        if(fruit[i]==="🍎"){
            appleShelf.innerHTML+=fruit[i]+" "
        }else if(fruit[i]==="🍊"){
            orangeShelf.innerHTML+=fruit[i]+" "
        }
    }
}

