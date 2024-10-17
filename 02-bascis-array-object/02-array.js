const actors = ["Mohan lal","Mamooty","Suresh Gopi"]
const actress = ["Shobhana","Parvathy","Meera Jasmin"]
const cricket = ["Sachin", "Sewang"]

// refer this docuemnation - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign


//actors.push(actress) // pushing the array in to parent array
// console.log(actors)

//const all = actors.concat(actress,cricket)
//console.log(all);

//const allHeros = [...actors, ...actress, ...cricket] // spread operator can use mutiple arrays to merge
//console.log(allHeros);

const marks = [20,30,50, [65,89,[78,58],56],45]
//console.log(marks.flat(Infinity)); // this will return a single array

//console.log(Array.isArray(["sd"])); // asking is it array or not, will return boolen
//console.log(Array.from("sumesh")); // convert to an array

console.log(Array.from({name:"sumesh"})); // intresting, an object directly can't convert in to an array.

score1 = 100
score2 = 200
score3 = 500

console.log(Array.of(score1,score2,score3)); // convert and return in a sigle array