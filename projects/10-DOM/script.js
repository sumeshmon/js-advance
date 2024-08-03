// console.dir(window.document.location)

const pageUrl = window.document.location.href
// console.log(pageUrl);

// innerHTML and innerText
const h1InnerHtml = document.getElementById('h2').innerHTML
const h1InnerText = document.getElementById('h2').innerText
// console.dir(h1InnerHtml)
// console.dir(h1InnerText)
  
const h2SubHeading = document.getElementsByClassName('h2-sub')
// console.dir(h2SubHeading)

const para = document.getElementsByTagName('p')
// console.dir(para)

// DOM nodes
const node = document.body.firstChild.nodeName
// console.dir(node)
// console.log(node)

// first child, last child and children
// Select the parent element
const parentElement = document.querySelector('.with-node');

// Get the last child element
const lastChild = parentElement.lastElementChild;

// console.log(lastChild); // This will log: <span>Item 3</span>

// task - append text
const appendText = document.querySelector('#h2')
appendText.innerHTML = appendText.innerHTML + ' ' + ', <span>Added para</span>' 

// task - create 3 div's with common class and add unique text to each items
const task2 = document.querySelectorAll('.items')
task2[0].innerText =  task2[0].innerText + ' newly added'

 