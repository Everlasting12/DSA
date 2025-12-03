

//    A
//   ABA
//  ABCBA
// ABCDCBA


// 3 spaces   1 letters  3 spaces
// 2 spaces   3 letters  2 spaces
// 1 spaces   5 letters  1 spaces
// 0 spaces   7 letters  0 spaces

function printPattern(n){
  
  for(let i = 1; i <n; i++){
    let row = ''
    // space
    for(let j = 1; j < n - i; j++){
      row+=" "
    }
    
    //alpha
    let char = 64
    for(let j = 1; j <= (2 * (i-1)) + 1; j++){
      let middle = Math.floor(((2 * (i-1)) + 1)/2)

      if(j-1 <= middle){
        char++
      }else{
        char--
      }
      
      row+= String.fromCharCode(char)
    }
    
    // space
    for(let j = 1; j < n - i; j++){
      row+=" "
    }
    
    console.log(row)
  }
}



printPattern(5)
