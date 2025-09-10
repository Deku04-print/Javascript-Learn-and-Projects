let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    let fighter1=getRandom()
    let fighter2=getRandom()

    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    stageEl.textContent=fighters[fighter1] +" VS " +fighters[fighter2]
})

function getRandom(){
    return Math.floor(Math.random()*17)
}