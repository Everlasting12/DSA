/**

*****
*****
*****
*****
*****

*/


function printPattern(n){
  for(let i = 0; i < n; i++){
    let row = ''
    for(let i = 0; i < n; i++){
      row+= '*'
    }
    console.log(row)
  }
}
printPattern(5)
