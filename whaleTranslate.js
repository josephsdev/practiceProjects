let input = "I am looking for directions to the pacific ocean preferably avoiding buoys"
const vowels = ['a', 'e', 'i', 'o', 'u']
let resultArray = []

for(let i = 0; i < input.length; i++){
  if (input[i] === 'e'){
        resultArray.push(input[i])
      }
   if (input[i] === 'u'){
        resultArray.push(input[i])
      }
  for(let x = 0; x < vowels.length; x++){
    if (input[i] === vowels[x]){
      resultArray.push(input[i])
      
      
    }
  }
}
let resultSting = resultArray.join('').toUpperCase()
console.log(resultSting)
