let userFormDOM = document.querySelector("#userForm")
let alertisVisible = false
userFormDOM.addEventListener('submit', formHandler)
const alertDOM = document.querySelector("#alert")
const userListDOM = document.querySelector("#userList")

// NOTE: This initial check block is now completely removed as it was the source of the issue.

const alertFunction = (title, message, className="warning")=>`
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong>${message}
  <button id="btn-close" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

function formHandler(event){
    event.preventDefault()
    const USER_NAME = document.querySelector("#username")
    const SCORE = document.querySelector("#score")

    if(USER_NAME.value && SCORE.value){
        addItem(USER_NAME.value, SCORE.value)
        USER_NAME.value = ""
        SCORE.value = ""
        // Set alertisVisible to false if successfully submitted (optional, but good practice)
        alertisVisible = false 
    } else {
        // 1. Inject the HTML for the alert
        alertDOM.innerHTML = alertFunction("Başlık bilgisi","Eksik bilgi girdiniz","danger") // Changed to 'danger' for error, 'success' implies good thing
        alertisVisible = true
        console.log("alert acildi")
        
        // 2. NOW that the button is in the DOM, we can find it and attach the listener
        let alertCloseButton = alertDOM.querySelector("#btn-close")
        if (alertCloseButton) { // Safety check
            alertCloseButton.addEventListener('click', ()=>{
                alertisVisible = false
                console.log("alert kapandi")
                // Optional: Clear the alert HTML so it visually disappears instantly
                alertDOM.innerHTML = "" 
            })
        }
    }
}

const addItem = (userName, score) => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `${userName} : ${score}`
    liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    userListDOM.appendChild(liDOM)
}