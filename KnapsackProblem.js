
function sumUp(n){
     let result = 0;
      for(let i =0; i<=n ; i++){
         result = result + i;
      }
      return result;
} 
console.log("SUM UP:",sumUp(3))


function sumUp2(n){
    return (n/2) * (1+n)
}
console.log("SUM UP:",sumUp2(3))