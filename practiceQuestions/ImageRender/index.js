// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.
let contain=document.getElementById("container")

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

function renderImg(){
    let ImgDOM=""
    for(let i = 0;i<imgs.length;i++){
        ImgDOM+=`

    <img alt="Employe of the company" class="team-img" src="${imgs[i]}">

    
`
    }
    contain.innerHTML+=ImgDOM
}
renderImg()