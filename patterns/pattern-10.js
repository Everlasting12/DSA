
/**
 1
01
101
0101
10101


 */


function printPattern(n){
  let toggle = 1
  for(let i = 0; i < n; i++){
    let row = ''
    for(let j = 0; j <= i; j++){
     row += toggle;
     if(toggle === 1) {
       toggle = 0
     }
     else {
       toggle = 1
     }
    }
    if(i % 2 !==0){
      toggle = 1
    }
    console.log(row)
  }
}
printPattern(5)



function printPattern1(n) {
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j <= i; j++) {
      row += ((i + j) % 2 == 0 ? 1  : 0).toString();
    }
    console.log(row);
  }
}

printPattern1(5)

