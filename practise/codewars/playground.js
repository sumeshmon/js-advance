const menu = [
    {item : 'Masala Dosahge', price : 80},
    {item : 'Meals', price :100},
    {item : 'Biriyani', price : 180}
]

cashInCounter = 0
orderQueue = []

function addNewItem(newItem){
    menu.push(newItem)
    return menu
}

const newItem = {item : 'Tea', price : 12}

// console.log(addNewItem (newhgeItem));

function  placeOrder (itemName) {
   let  item = menu.find( sasi => sasi.item === 'Meals')
    if( !itemName){
            throw new Error ('not matching')
    }
    cashInCounter += item.item
}


console.log(cashInCounter)
