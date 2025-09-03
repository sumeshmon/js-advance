const menu = [
    {name : 'Masala Dosa', price : 80},
    {name : 'Meals', price :100},
    {name : 'Biriyani', price : 180}
]

cashInCounter = 0
orderQueue = []

function addNewItem(newItem){
    menu.push(newItem)
    return menu
}

const newItem = {name : 'Tea', price : 12}

// console.log(addNewItem (newItem));

function  placeOrder (itemName) {
   const foundItem = menu.find(item => item.name === itemName);
    if( !itemName){
            throw new Error ('not matching')
    }
    cashInCounter += foundItem.price
}

const myOrder = placeOrder("Biriyani");
console.log(cashInCounter)
