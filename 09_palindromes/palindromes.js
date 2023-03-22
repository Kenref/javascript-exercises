const palindromes = (word) => {
    const reg = /\W/g

    word = word.toLowerCase()
    word = word.replace(reg, "")

    let word2 = word.split("").reverse().join("")

    return word === word2

}

// Do not edit below this line
module.exports = palindromes;
