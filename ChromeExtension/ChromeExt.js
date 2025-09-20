import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getDatabase,
         ref,
         push,
         onValue,
         remove} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-database.js";

const firebaseConfig = {
    databaseURL:"https://leads-tracker-app-6dcfd-default-rtdb.asia-southeast1.firebasedatabase.app/"
}
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const ReferenceInDB=ref(database,"leads")


const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")







function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
        <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                    </a>
            </li>
            `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
        // Challenge: Import the 'remove' function and call it here to delete the leads

    remove(ReferenceInDB)
    ulEl.innerHTML=""
    
})

inputBtn.addEventListener("click", function() {
    push(ReferenceInDB,inputEl.value)
    inputEl.value = ""
   
    
})

onValue(ReferenceInDB,function(snapshot){

    const snapshotDoesExist=snapshot.exists()

    if(snapshotDoesExist){

        const snapshotValues = snapshot.val()
        const leads = Object.values(snapshotValues)
        render(leads)
    }
})