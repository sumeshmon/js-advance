// Creates a new array containing only the elements of the original array that satisfy a given condition. (boolen)

// ++++++++++ trying to return using forEach ++++++++++++
const coding = ['javascript', 'typescript','react js','python']

// forEach function will not return. It will be undefined
const myRoadMap = coding.forEach( (param) => {
    //console.log(param);
    // return param // undefined
})
// console.log(myRoadMap);

// +++++++++++++ filter() +++++++++++
const mynum = [20,45,30,10,56,68]

//const result = mynum.forEach( (param) => param > 30 ) // using foreach can't return the values
const result = mynum.filter( (param) => param > 30 ) 
// const result = mynum.map( (param) => param > 30 )  // boolean
 console.log(result);

// +++++++++ using forEach ++++++++++
const temArray = []
mynum.forEach ( (param) => {
    if( param > 30){
        temArray.push(param)
        return temArray
    }
})
//console.log(temArray);


// +++++++++++ filter with condition on real data ++++++++++++++
const books = [
    {
        bookname : 'Book one',
        category : 'History',
        publishDate : 1982,
        newEdition : 2002
    },
    {
        bookname : 'Book two',
        category : 'Fantacy',
        publishDate : 1992,
        newEdition : 2008
    },
    {
        bookname : 'Book three',
        category : 'Science',
        publishDate : 1972,
        newEdition : 2020
    },
    {
        bookname : 'Book four',
        category : 'Science',
        publishDate : 1992,
        newEdition : 2023
    }
]
//const findBook = books.filter( (param) => param.category === 'History')
const findBook = books.filter( (param) => param.category === 'History' && param.newEdition > 2000)
console.log(findBook);