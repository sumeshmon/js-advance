for (let index = 1; index <= 10; index++) {
    const parent = index;
    //console.log(`i am parent ${parent}`);
    for (let j = 1; j <= 10; j++) {
        const child = j;
        //console.log(`i am child ${child}`);
        //console.log(parent + '*' + j + ' = ' + parent*j);
    }
    
}

const movies = ['malayalam', 'tamil','telugu','bollywood']
for (let i = 0; i < movies.length; i++) {
    //const element = movies[index];
    //console.log(`popular movies in ${element}`);
}

const india = {
    kerala: 'malayalam',
    tamil: 'tamil',
    mumbai: 'hindi',
    states:{
        maharasrta: 'mumbai',
        up: 'lakhnow',
        special:{
            mumbai_special: 'vadapav',
            lakhnow_special : 'panipuri',
            rating:{
                garam_vadapav:'avarage',
                good_panipuri: 'nice'
            }
        }
        
    }
}
//  +++++++++++++++++ single key ++++++++++++++++++
// for (key in india){
//     console.log(key, india[key]);
// }


function iterateObject(obj) {
    for (let key in obj) {
        //console.log(`++ ${key}`);
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            //console.log(`nested object are :  ${key}:`);
            iterateObject(obj[key]);
        } else {
            //console.log(`First level :  ${key}: ${obj[key]}`);
        }
    }
}

iterateObject(india);

// break and continue
for (let index = 1; index <= 20; index++) {   
    if (index == 5) {
        console.log(`dectued 5`);
        // break
        continue
    }
    console.log(index);
}