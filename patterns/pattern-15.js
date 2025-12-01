
/**

A
BB
CCC
DDDD
EEEEE

 */



function printPattern(n){
  for(let i = 1; i <=n; i++){

    let row = ''
    // alphabets
    for(let j = 1; j <= i; j++){
      row+= String.fromCharCode(64 + i)
    }
    console.log(row)
  }
}
printPattern(5)