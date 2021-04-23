module.exports = (first_name, last_name)=>{
    let first = ""
    let second = ""
    for (let i = 0; i < 3; i++) {
        first+=first_name[i]
        second+=last_name[i]
    } 
    first.toLowerCase()
    second.toLowerCase()
    return `${first}${second}`
}