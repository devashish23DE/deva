function swapcase(str) {

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase()) {
            str[i].toUpperCase();}
        else {str[i].toLowerCase();}
    }
    return str
}

console.log(swapcase('AaBbc'));