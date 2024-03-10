let submit = document.getElementById("userInput");
let addtask = document.getElementById("item");
let addBtn = document.getElementById("addBtn");

let addTodo = () => {
    if(submit.value.length == ""){
        console.log("Please enter your task");
    } else {
        addtask.innerHTML += `<div class="todo">${submit.value} <span class="remove" id="delete">x</span></div>`
        attachRemoveEventListeners()
        submit.value = "" // Clear the input field after adding a todo
    }
    
}

addBtn.addEventListener("click",addTodo)

let removeTodo = (element) => {
    element.remove();
    console.log(element);
}
let attachRemoveEventListeners = () => {
    removeItems = document.querySelectorAll(".remove");
    removeItems.forEach(items => {
        items.addEventListener("click", () => {
            removeTodo(items.closest(".todo"))
        })
    });
}
attachRemoveEventListeners()

// optimized

// // Get references to DOM elements
// const submit = document.getElementById("userInput");
// const addtask = document.getElementById("item");
// const addBtn = document.getElementById("addBtn");

// // Function to add a new todo
// const addTodo = () => {
//     if (submit.value.length === 0) {
//         console.log("Please enter your task");
//     } else {
//         addtask.innerHTML += `<div class="todo">${submit.value} <span class="remove" id="delete">x</span></div>`;
//         attachRemoveEventListeners();
//         submit.value = ""; // Clear the input field after adding a todo
//     }
// }

// // Event listener for the add button
// addBtn.addEventListener("click", addTodo);

// // Function to remove a todo
// const removeTodo = (element) => {
//     element.remove();
// }

// // Function to attach click event listeners to remove buttons
// const attachRemoveEventListeners = () => {
//     const removeItems = document.querySelectorAll(".remove");
//     removeItems.forEach((removeItem) => {
//         removeItem.addEventListener("click", () => {
//             removeTodo(removeItem.closest(".todo"));
//         });
//     });
// }

// // Initial attachment of click event listeners
// attachRemoveEventListeners();