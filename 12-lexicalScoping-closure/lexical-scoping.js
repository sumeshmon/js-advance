function parent() {
    let parentName = 'Sundaran'
    console.log('Parent > secongGen name',secongGenName); // parent can't access childrens properties/methods
    function secongGenName(){
        let secongGenName = 'sumesh'
        console.log('second >  parent name', parentName);
        console.log('second > same name',secongGenName);
        // console.log('third > same name',thirdGenName); // second level can't access third level 
        // trying third level function
        function thirdGen(){
            let thirdGenName = 'Tejas'
            console.log('third > same', thirdGenName);
        }
        thirdGen()
    }
    secongGenName()
}
parent()