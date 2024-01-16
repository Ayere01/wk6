let baby_dev = "ayere"
console.log(baby_dev)

const items = document.querySelectorAll('ul li')

items[0].textContent = baby_dev.length
console.log(baby_dev.length)
items[1].innerHTML = baby_dev.toUpperCase()
console.log(baby_dev.toUpperCase())
items[2].innerHTML = baby_dev.toLocaleLowerCase()
console.log(baby_dev.toLocaleLowerCase())
items[3].textContent = baby_dev.charAt(3)
console.log(baby_dev.charAt(3))
items[4].textContent = baby_dev.substring(1, 3)
console.log(baby_dev.substring(1, 3))
items[5].textContent = baby_dev.replace("y", "z")
console.log(baby_dev.replace("y", "z"))
items[6].textContent = baby_dev.indexOf("r")
console.log(baby_dev.indexOf("r"))
items[7].textContent = "Hi my name is ".concat(baby_dev, " from univelcity")
console.log("Hi my name is ".concat(baby_dev, " from univelcity"))
items[8].textContent = baby_dev > length
console.log(baby_dev > length)

const code = document.querySelectorAll('ol li')
let num1 = 5
let num2 = 7
let num3 = 3

let ans = num1 + num2
code[0].innerHTML = 'num1 + num2 is ' + ans
console.log(ans)

let ans_2 = num2 - num3
code[1].innerHTML = 'num2 - num3 is ' + ans_2
console.log(ans_2)

let ans_3 = num1 * num3
code[2].innerHTML = 'num1 * num3 is ' + ans_3
console.log(ans_3)

let ans_4 = num3 / num2
code[3].innerHTML = 'num3 / num2 is ' + ans_4
console.log(ans_4)

let ans_5 = num1 % num2
code[4].innerHTML = 'num1 % num2 is ' + ans_5
console.log(ans_5)