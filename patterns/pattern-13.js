

/**

A
AB
ABC
ABCD
ABCDE 

*/


function printPattern(n){
  for(let i = 1; i <=n; i++){

    let row = ''
    // alphabets
    for(let j = 1; j <= i; j++){
      row+= String.fromCharCode(64 + j)
   
    }
    console.log(row)
  }
}
printPattern(5)