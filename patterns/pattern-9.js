 
/**
 
*
**
***
****
*****
****
***
**
*

*/

function printPattern(n){
  for(let i = 0; i < 2*n; i++){
    let row = ''
    for(let j = 0; j < 2*n; j++){
      if(j <=i && i < n){
         row += '*'
      }
      if(i >= n && j < (2*n - i-1)){
        row += '*'
      }
    }
    console.log(row)
    
  }
}
printPattern(5)