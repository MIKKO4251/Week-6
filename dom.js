const idOne = document.getElementById('one')

idOne.textContent = 'Brenda'

document.getElementById('lone').textContent = 'George'

const tittle = document.querySelector('h1')

tittle.textContent = 'DOM Manipulations'

const lists = document.querySelector('ul li')

lists[1].textContent = 'John'
lists[2].textContent = 'Petr'

const twos = document.querySelectorAll('.two')

twos[0].innerHTML = 'Mikko deals with <strong>computer gadgets</strong>'

const deuxes = document.getElementsByClassName('two')

deuxes[1].innerText = 'Joshua is \n always \n\n\n in class late'
deuxes[3].innerText = 'Abdukareem '

lists[3].style.backgroundColor = 'blue'
lists[3].style.backgroundColor = '#000'
lists[3].style.paddingBlock = '30px'

// alert(tittle.textContent)