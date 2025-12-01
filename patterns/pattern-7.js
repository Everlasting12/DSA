/**

     *    
    ***   
   *****  
  ******* 
 *********

*/

function printPattern(n){
  
  for(let i = 0; i < n; i++){
    let row = ''
    for(let j = 0; j < 2*n; j++){
      if(j >= (n - i) && j <= (n + i)){
        row+= '*'
      }else {
        row+= ' '
      }
    }
    console.log(row)
  }
}
printPattern(5)