console.dir(document)
console.log(document.URL)

const hTag=document.querySelector('h1');
console.log(hTag)

const divTag=document.querySelector('Div'); //will select the very first div
console.log(divTag)


const divs=document.querySelectorAll('Div');
console.log(divs)

//we can change the source code value
hTag.textContent="Hello World!!!!"
console.log(hTag.textContent)