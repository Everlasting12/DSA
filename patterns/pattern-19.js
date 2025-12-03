/**

E
DE
CDE
BCDE
ABCDE

*/

function printPattern(n){
  
  for(let i = 1; i <=n; i++){
    let row = ''
    let char = 69 - i 
    
  
    for(let j = 1; j <= i; j++){
     row+= String.fromCharCode(char + j)
    }
    
    console.log(row)
  }
}



printPattern(5)
