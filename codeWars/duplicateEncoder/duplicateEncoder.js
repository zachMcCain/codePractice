// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function duplicateEncode(word){
  word = word.toLowerCase();
  // Create an object to store string elements
  let elementsCount = {};
  // Loop through the word
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    // console.log(letter);
    // If the letter exists in the object
        // increase it's count, otherwise initialize to 0
    elementsCount[letter] ? elementsCount[letter]++ : elementsCount[letter] = 1
  }
  // Create a result string
  let result = '';
    // Loop through word again
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    // If the element count is greater than 1
      // concat ')', otherwise concat '('
    result = elementsCount[letter] > 1 ? result.concat(')') : result.concat('(')
  }

  return result;
}


console.log(duplicateEncode('hello world'));