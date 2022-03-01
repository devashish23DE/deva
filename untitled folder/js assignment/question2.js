function count(str, occ, bool){

    if(typeof bool == 'undefined') {
        str = str.toLowerCase();
    }

    let count = 0;
    let index = str.indexOf(occ, 0);

    while(index != -1){
        count++;
        index = str.indexOf(occ, index+1);
    }
    return count;
}

console.log(count("The quick brown fox jumps over the lazy dog", 'the'));