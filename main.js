const formAdd = document.querySelector('.form')
const ulItems = document.querySelector('.items')
const filteritems = document.querySelector('.search')

formAdd.addEventListener('submit', addList)
ulItems.addEventListener('click', removeList)
filteritems.addEventListener('keyup', searchList)

function addList(e){
    e.preventDefault()

    const newList = document.querySelector('.addItem').value

    const li = document.createElement('li')
    li.className = 'list-group'
    li.appendChild(document.createTextNode(newList))
    const BtnDell = document.createElement('button')
    BtnDell.className = 'btnDel'
    BtnDell.appendChild(document.createTextNode('X'))

    li.appendChild(BtnDell)

    ulItems.appendChild(li)

    const clear = document.querySelector('.addItem')
    clear.value = ''
    const focus = document.querySelector('.addItem').focus()
}

function removeList(e){
    e.preventDefault()

    if(e.target.classList.contains('btnDel')){
        if(confirm('Are you sure you want to remove this list?')){
            const li = e.target.parentElement;
            ulItems.removeChild(li)
        }
    }
}

function searchList(e){
    e.preventDefault()

    const text = e.target.value.toLowerCase()
    const items = ulItems.getElementsByTagName('li')
    
    Array.from(items).forEach((item) => {
        const itemName = item.firstChild.textContent;

        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = "block"
        } else {
            item.style.display = "none"
        }
    })
}