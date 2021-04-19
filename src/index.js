
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
        } else if (code === 45 || code === 32 ){ // keep space and hyphen 
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


    const spaceFree = removeExtraSpaces(filtered.join(separator))

    return spaceFree.split(' ').join('-')
}
