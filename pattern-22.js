
/**
 
******
*    *
*    *
*    *
*    *
******

*/


function printPattern(n){
  
  for(let i = 1; i <n; i++){
    let row = ''
  
    for(let j = 1; j < n; j++){

      if(i === 1 || i === n - 1){
          row+='*'
      }
      else if(j == 1 || j == n- 1){
        row+='*'
      }
      else{
        row+=' '
      }
    }
    console.log(row)
  }
}


printPattern(5)