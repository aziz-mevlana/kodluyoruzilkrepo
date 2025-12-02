const STORAGE_KEY = 'todoListTasks'

document.addEventListener('DOMContentLoaded', function() {
    loadTasks()

    let listItems = document.querySelectorAll("#list li")

    listItems.forEach(function(item) {
        item.addEventListener('click', toggleDone)
        addCloseButton(item)
        })

})

function saveTasks() {
    const list = document.getElementById('list')
    const tasks = []

    list.querySelectorAll('li').forEach(li => {
        tasks.push({
            text: li.textContent.replace('\u00D7', '').trim(),
            checked: li.classList.contains('checked')
        })
    })
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('todoListTasks'))
    if (!tasks) return

    const list = document.getElementById('list')
    list.innerHTML = ''

    tasks.forEach(task => {
        let li = document.createElement('li')
        li.textContent = task.text

        if (task.checked) {
            li.classList.add('checked')
        }

        li.addEventListener('click', toggleDone)
        
        addCloseButton(li)
        list.appendChild(li)
    })
}
document.addEventListener('DOMContentLoaded', loadTasks)

function newElement() {
    let li = document.createElement('li')
    let inputValue = document.getElementById('task').value.trim()

    if (inputValue === '') {
        $('.error').toast('show')       
    } else {
        li.textContent = inputValue
        document.getElementById('list').appendChild(li)
        
        $('.success').toast('show')

        li.addEventListener('click', toggleDone)
        addCloseButton(li)

        saveTasks()
    }
    document.getElementById('task').value = ''
}

function addCloseButton(li) {
    let span = document.createElement('span')
    let txt = document.createTextNode('\u00D7')
    span.className = 'close'
    span.appendChild(txt)
    li.appendChild(span)

    span.addEventListener('click', deleteItem)
}

function toggleDone(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked')
        saveTasks()
    }
}

function deleteItem(event) {
    let div = event.target.parentElement
    div.remove()
    saveTasks()
    event.stopPropagation()
}

document.getElementById('task').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        newElement()
    }
})