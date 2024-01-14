// document.querySelector('h2').textContent = 'Dom manipulation'
const title = document.querySelector('h2')

title.textContent = 'DOM manipulation'

const para1 = document.querySelector('p')
const para2 = document.querySelector('p:nth-of-type(2)')
const para3 = document.querySelector('body>:nth-child(5)')
const para4 = document.querySelector('p+p+p+p')
const para5 = document.querySelector('.last')

para1.textContent = 'this is the first paragraph'
para2.textContent = 'this is the second paragraph'
para3.textContent = 'this is the third paragraph'
para4.textContent = 'this is the forth paragraph'
para5.textContent = 'this is the last paragraph'

const lists = document.querySelectorAll('ul li')
lists[0].textContent = 'list 001'
lists[1].textContent = 'list 002'
lists[2].textContent = 'list 003'
lists[3].textContent = 'list 004'
lists[4].textContent = 'list 005'
lists[5].textContent = 'list 006'

const unique = document.getElementById('one')
unique.style.backgroundColor = '#E55'
unique.style.textTransform = 'uppercase'
lists[0].style.borderBottom = '6px dotted blue'
lists[1].style.color = '#f0f'

const para = document.querySelectorAll('p')
para[0].style.fontsize = '3rem'
para[4].style.background = 'linear-gradient(green 30%, blue 30%, blue 60%, red 60%, red 80%)'

const header = document.querySelector('h1')
header.style.textAlign = 'center'

const classOne = document.getElementsByClassName('one')

classOne[0].textContent = 'this is a class paragraph'

const declaration = document.getElementsByTagName('div')
declaration[0].style.color = "red"

const par = document.querySelector('#par')
par.innerHTML =  "I'm a <br> <strong>frontend</strong> developer. He said <q>I am coming</q>"