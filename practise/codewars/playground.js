function cockroachSpeed(s) {
    // let speed = Math.round((s * 100000) / 3600)
    return Math.floor((s * 100000) / 3600)
}
console.log(cockroachSpeed(1.18));

