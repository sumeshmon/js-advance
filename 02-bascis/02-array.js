const actors = ["Mohan lal","Mamooty","Suresh Gopi"]
const actress = ["Shobhana","Parvathy","Meera Jasmin"]

//actors.push(actress) // pushing the array in to parent array
// console.log(actors)

const all = actors.concat(actress)
//console.log(all);

const allHeros = [...actors, ...actress]
console.log(typeof allHeros);