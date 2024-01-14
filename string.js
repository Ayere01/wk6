const rhyme = document.querySelector('h1')
const nursery = rhyme.textContent

// const lists = document.getElementsByTagName('li')
const lists = document.querySelectorAll('ol li') 

// lenght of a string
lists[0].textContent += nursery.length

// toupperCase method
lists[1].innerHTML += `<strong>${nursery.toUpperCase()}</strong>`

// tolowerCase method
lists[2].innerHTML += `<strong>${nursery.toLocaleLowerCase()}</strong>`

// first character
lists[3].innerHTML = `First character: ${nursery[0]}`

// last character
lists[4].innerHTML = `last character: ${nursery[nursery.length - 1]}`

//indexOf
lists[5].innerHTML = `the index of the letter "t" is ${nursery.indexOf('t')}`

//indexOf
lists[6].innerHTML = `the index of the second letter "t" is ${nursery.indexOf('t', 9)}`

//indexOf
lists[7].innerHTML = `the index of the letter "z" is ${nursery.indexOf('z')}`

//lastIndexOf
lists[8].textContent = 'the last index of letter \'a\' ' + nursery.lastIndexOf('a')

//replace
lists[9].innerText = 'Replace "you" with "we": ' + nursery.replace('you', 'we')

//replaceAll
lists[10].innerText = 'Replace "o" with "u": ' + nursery.replaceAll('o', 'u')

const twinkle = nursery.slice(0,7)
lists[11].textContent = twinkle

//same as line 40
// const twinkle = nursery.slice(0,nursery.indexOf('e')+1)
// lists[11].textContent = twinkle

//repeat
lists[12].textContent = twinkle.repeat(5)

//charAt
lists[13].textContent = 'character at index 20: ' + nursery.charAt(20).toUpperCase()

//startsWith
lists[14].textContent = 'if it starts with "k" return: ' + nursery.startsWith('k')

//endsWith
lists[15].textContent = 'if it ends with "y" return: ' + nursery.endsWith('y')

//includes
lists[16].textContent = 'if it includes "s" return: ' + nursery.includes('s')

//split
lists[17].textContent = nursery.split(' ')

//concatenate
lists[18].textContent = 'The nursery rhyme starts with: '.concat(twinkle, 'franc', 'univelcity')