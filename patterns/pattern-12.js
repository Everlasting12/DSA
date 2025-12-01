
/**
1
23
456
78910
1112131415

 */


function printPattern(n){
  let count = 1
  for(let i = 1; i <=n; i++){
    let row = ''
    
    
    // numbers
    for(let j = 1; j <= i; j++){
      row+=count
      count++
    }
    
    console.log(row)
   
  }
}
printPattern(5)