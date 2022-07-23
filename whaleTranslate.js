// Sentence you would like to translate. Whales do not use consonants and double E's and U's
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
      // ^ doubles E's and U's
  for(let x = 0; x < vowels.length; x++){
    if (input[i] === vowels[x]){
      resultArray.push(input[i])
    }
    // ^ Finds vowels and adds them to resultArray
  }
}
let resultSting = resultArray.join('').toUpperCase() // Turns result array into string
console.log(resultSting)
