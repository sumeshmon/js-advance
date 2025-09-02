const menu = [
    {item : 'Masala Dosahge', price : 80},
    {item : 'Meals', price :100},
    {item : 'Biriyani', price : 180}
]

function addNewItem(newItem){
    menu.push(newItem)
    return menu
}

const newItem = {item : 'Tea', price : 12}

console.log(addNewItem (newItem));
