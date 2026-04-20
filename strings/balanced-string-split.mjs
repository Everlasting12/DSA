function balancedStringSplit(s){
  let L = R = count = 0;

  for(let i = 0; i < s.length; i++){
    if(s[i] == "R"){
      ++R
    }else {
      ++L
    }

    if( R === L){
      ++count;
      L = R = 0
    }
  }

  return count;
}


console.log("balancedStringSplit", balancedStringSplit("RLRRLLRLRL"))
