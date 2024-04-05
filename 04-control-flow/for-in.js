const india = [
    {
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
]

for (const key in india) {
    //console.log(`${key} shortcut is for ${india[key]}` );
}

