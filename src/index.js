
const str = 'hello world'


function capitalize(str) {
    const first = str[0].toUppercase()
    const rest = str.slice(1)
    return first + rest 
}


console.log(capitalize(str))