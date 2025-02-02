function areYouPlayingBanjo(name) {
    // if(name.startsWith('R') || name.startsWith('r')){
    //   return (`${name} plays banjo`)
    // } else{
    //   return (`${name} does not play banjo`)
    // }

    return /^[Rr]/.test(name) ? `${name} plays banjo` : `${name} does not play banjo`
    
  }
  console.log(areYouPlayingBanjo('rem'))