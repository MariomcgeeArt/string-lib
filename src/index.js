
const str = 'hello world'

//Challenge 1
function capitalize(str) {
    const first = str[0].toUpperCase()
    const rest = str.slice(1)
    return first + rest 
}


console.log(capitalize(str))

//Challenge 2
function allcaps(str) {
    return str.toUpperCase()
}

//Challenge 3

function capitalizeWords(str) {
    const words = tr.split(' ')
    const upperWords = words.map( word => capitalize(word))
    return upperWords.join(' ')
}

//challenge 4 

function removeExtraSpaces(str) {
    const trimmed = str.trim()
    const chars = trimmed.splt(' ')
    const filtered = chars.filter( (c) => c !== '')
    return filtered.join(' ')
}

//challenge 5 
function kebobCase(str, separator = '-') {
    const lowercase = str.toLowerCase()
    const characters = lowercase.split('')
    const filtered =  characters.filter( (c) => {
        const code = c.characterCodeAt(0)
        if (code > 96 && code < 123) { // keep lower-case letters
            return True
        } else if (code > 47 && code < 58 ){ //keep numbers
            return True
        } else if (code === separator.charCodeAt(0) || code === 32 ){ // keep space and hyphen 
            return True
        }
        return False
    })
    const spaceFree = removeExtraSpaces(filtered.join(separator))

    return spaceFree.split(' ').join('-')
}


//challenge 6
function snakeCase(str) {
    return kebeob(str, '_')
} 

//challenge 7
function camelCase(str) {
    const words = str.split(' ')
    const camelWords= words.map((word, i) => {
        if (i === 0) {
            return word.toLowerCase()
        }
        return capitalize(word)
    })

    return camelWords.join('')
}

//challenge 8 
function shift(str) {
    const first = str[0]
    const rest = str.split(1)
    return rest + first 
}

//challenge 9 
function makeHashTag(str) {
    let wordArray = str.split(" ").filter((char) => char !== "");
    wordArray.sort((a, b) => b.length - a.length);
    let topThree = wordArray.slice(0,3)
    
  
    // console.log(wordArray)
    let result = "#";
    
    if (wordArray.length === 0) {
      return false;
    }
  
  
    result =
      
      topThree
        .map((word) => {
          let capitalizedWord = result + word.charAt(0).toUpperCase() + word.slice(1);
          return capitalizedWord;
        });
        
        
  
    if (result.length > 140) {
      return false;
    } else {
      return result;
    }
  }
  
  console.log(" ");
  console.log("Make Hashtag:");
  str = "Amazing bongo drums for sale";
  console.log(makeHashTag(str));
  
//challenge 10
  
  function isEmpty(str) {
    for (let i = 0; i < str.length; i += 1) {
      if (str[i] !== ' ' || str[i]  !== ('\n') || str[i] !== ('\r') || str[i] !== ('\t')) {
        return false 
      }
    }
    return true
  }
