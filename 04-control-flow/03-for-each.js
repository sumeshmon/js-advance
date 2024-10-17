// for each
const marks = [30,20,88,65]
marks.forEach(element => {
    //console.log(element);
});

const car = ['BMW','Audi','Alto']

// using arrow function
const printMe = (val) => {
    console.log(val);
};
car.forEach(printMe);

// using normal function
// function printMe(val){
//     console.log(val);
// }

// forEach also fetch index and full array
const family = ['sumesh', 'sali', 'theertha', 'tejas']
family.forEach( (val,index,arr) => {
    // console.log(index,val,arr);
} )

// ++++++++++++ looping with array with objects ++++++++++++++
const news = [
    {
        id: 99822,
        category : 'adhoc'

    },
    {
        id: 74877999,
        category : 'corporate'

    },
    {
        id: 8797979999,
        category : 'voting rights'

    }
]

news.forEach( (param) => {
    // console.log(param);
    //console.log(param.category);
})

// ++++++++++++++ multilevel array ++++++++++++++
const india = [
    {
        kerala: 'malayalam',
        tamil: 'tamil',
        mumbai: 'hindi',
        states:{
            maharasrta: 'mumbai',
            up: 'Lucknow',
            special:{
                mumbai_special: 'vadapav',
                lucknow_special : 'panipuri',
                rating:{
                    garam_vadapav:'average',
                    good_panipuri: 'nice'
                }
            }
            
        }
    }
]

// Function to recursively print keys and values of an object
function printKeysAndValues(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            // If the value is an object, recursively call the function
            printKeysAndValues(obj[key]);
        } else {
            // If the value is not an object, print the key-value pair
            console.log(`${key}: ${obj[key]}`);
        }
    }
}

// Accessing keys and values of the india object
india.forEach(obj => {
    // printKeysAndValues(obj);
});