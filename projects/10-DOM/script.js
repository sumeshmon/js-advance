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

console.log(lastChild); // This will log: <span>Item 3</span>


 