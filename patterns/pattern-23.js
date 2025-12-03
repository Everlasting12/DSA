/**


4444444
4333334
4322234
4321234
4322234
4333334
4444444

 */




function printPattern(n){
  
  for(let i = 0; i <2* n- 1; i++){
    let row = ''
  
    for(let j = 0; j < 2* n- 1; j++){
      let top = i;
      let left = j;
      let right =  2*n -1- 1 - j;
      let bottom =  2*n -1- 1 - i;
      
      row+= n - Math.min(Math.min(top, bottom), Math.min(left, right))
      
    }
    console.log(row)
  }
}


printPattern(4)
