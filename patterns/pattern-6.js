/**

12345
1234
123
12
1

*/

function printPattern(n){
  
  for(let i = 0; i < n; i++){
    let row = ''
    for(let j = n; j > i; j--){
      row+= n - j + 1
    }
    console.log(row)
  }
}
printPattern(5)