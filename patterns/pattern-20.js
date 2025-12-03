/** 
 * 
************
*****  *****
****    ****
***      ***
**        **
*          *
*          *
**        **
***      ***
****    ****
*****  *****
************

*/

function printPattern(n){
  let space = 0
  for(let i = 1; i <=n; i++){
    let row = ''
    // star
    for(let j = 1; j <= n - i+1; j++){
      row+='*'
    }
    // space
    for(let j = 1; j <= 2*(n + i); j++){
      row+=' '
    }
    // star
    for(let j = 1; j <= n - i+1; j++){
      row+='*'
    }
    space+=2
    console.log(row)
  }
  
  for(let i = 1; i <=n; i++){
    let row = ''
    // star
    for(let j = 1; j <= i; j++){
      row+='*'
    }
    // space
    for(let j = 1; j <= 2*(n - i); j++){
      row+=' '
    }
    // star
    for(let j = 1; j <= i; j++){
      row+='*'
    }

    console.log(row)
  }
}



printPattern(6)
