const userForm = document.querySelector('#userForm')
const userName = document.querySelector('#name')
const userSurname = document.querySelector('#surname')
const userAge = document.querySelector('#age')
const userList = document.querySelector('#userList')

const submitHandler  = (e) => {
    e.preventDefault()
    
    if(userName.value && userSurname.value && userAge.value >= 18) {
        showInfos(userName.value, userSurname.value, userAge.value)
        userName.value = ""
        userSurname.value = ""
        userAge.value = ""
    } else {
        alert('Lütfen tüm bilgileri eksiksiz ve doğru şekilde giriniz. (Yaşınız en az 18 olmalıdır.)')
    }
}

const showInfos = (name, surname, age) => {
    const liDOM = document.createElement('li')
    liDOM.innerHTML = `İsim: ${name} - Soyisim: ${surname} - Yaş: ${age}`
    liDOM.classList.add('list-group-item', 'mb-2', 'bg-light')
    userList.appendChild(liDOM)
    if(userList.firstChild) {
        userList.style.display = 'flex'
    }
}
userForm.addEventListener('submit', submitHandler)