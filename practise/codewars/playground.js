var number = function(busStops){
    return busStops.reduce ( function ( peopel, [on,off]){
        console.log(`peopel ${peopel} -- on ${on} -- off ${off}`);
        
        return peopel + on - off
    }, 0)
}


console.log(number([[10, 0], [3, 5], [5, 8]]));


