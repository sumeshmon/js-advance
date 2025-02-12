function points (games){
    return games.reduce ( (total, noGames) => {
        // console.log(`total:${total}, games: ${noGames}`);
        let [x,y] =  noGames.split(':').map(Number)
        // console.log(`x:${x} y:${y}`);
        if( x > y ) {
            total += 3
        } else if ( x ===y) {
            total += 1
        }
        return total
    },0 )
}
let result = ["3:1", "2:2", "0:1", "2:2", "3:2", "1:3", "5:3", "2:4", "4:3", "2:1"]
// console.log(points(result));
