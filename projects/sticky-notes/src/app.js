let submit = document.getElementById("userInput");
let addtask = document.getElementById("item");
let addBtn = document.getElementById("addBtn");
let removeItems = document.querySelectorAll("remove");

let addTodo = function(){
    if(submit.value.length == ""){
        console.log("Please enter your task");
    } else {
        addtask.innerHTML += `<div class="todo">${submit.value} <span class="remove" id="delete">x</span></div>`
    }
    
}

addBtn.onclick = function(){
    addTodo();
}

let closeBtn = function(){
    for (let i=0; i<removeItems.length;i++){
        console.log(i);
    }
    console.log(removeItems[i]);
}

