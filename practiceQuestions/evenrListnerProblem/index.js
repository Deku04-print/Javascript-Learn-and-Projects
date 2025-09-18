let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

const JaneBtn=document.getElementById("Jane-btn")
const MarkBtn=document.getElementById("Mark-btn")
// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
JaneBtn.addEventListener("click",function(){
    console.log(`The Score of ${data[0].player} is ${data[0].score}`)
})
MarkBtn.addEventListener("click",function(){
    console.log(`The Score of ${data[1].player} is ${data[1].score}`)
})
// Log Jane's score when the button is clicked (via data)
