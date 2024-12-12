// --Directions 
//Given a string, return a new string with the reversed order of characters
// ---Examples
// reverse('h1') === 'ih'
// reverse('hello') === 'olleh'
// reverse('CodingMoney') === 'yenoMgnidoC'

function reversedString(string){
    let reversed = '';

 for(let i=0; i<string.length ;i++){
     reversed = string[i] + reversed;
     console.log("reversed", reversed);
 }
 return reversedString
}

console.log("Revresed string is: ",reversedString("CodingMoney"))