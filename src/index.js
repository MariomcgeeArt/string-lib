
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
