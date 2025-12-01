/**

1        1
12      21
123    321
1234  4321
1234554321

 */



function printPattern(n){
  let space  =  2 * (n - 1)
  for(let i = 1; i <=n; i++){
    let row = ''
    
    
    // numbers
    for(let j = 1; j <= i; j++){
      row+=j
    }
    
    //spaces
    
    for(let j = 1; j <= space; j++){
      row+= ' '
    }
    
    // numbers
    for(let j = i; j >= 1; j--){
      row+=j
    }
    console.log(row)
    space-=2
  }
}
printPattern(5)