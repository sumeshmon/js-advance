// trying loog colors
const randomColor = function() {
    let hex = '012346789ABCDEF';
    let color = '#';

    for (let index = 0; index < 6; index++) {
        color += hex[Math.floor(Math.random() * 16)];
    }

    // console.log(color); // Print the color code
    return color;
};

randomColor();


// 
const myArr = [1,2,3,4,5,6,7]

// normal function
myArr.filter( function(param){
    if(param > 2){
        // console.log(param);
    }
})
// usinf map
const usingMap = myArr.map( (val) => (val+10) )
// console.log(usingMap)


// arrow function
const usingArrow = myArr.filter( (param)=> param > 2)
// console.log(usingArrow);


// chacking this in normal function and arrow function
const normalFun = {
    name : 'Sumesh',
    age : 15,
    normal : function (){
        console.log('I am normal function', this.name);
        console.log(this);
    }
}
// normalFun.normal();

const arrowFun = {
    name : 'Sali',
    age : 25,
    arrow () {
        console.log('I am arrow function', this.name);
        console.log(this);
    } 
        

}
// arrowFun.arrow()


