function union() {
    return [...new Set(arguments[0].concat(arguments[1]))].sort(
    (a, b) => a - b
    );
    }
    
    console.log(union([1, 2, 3], [100, 2, 1, 10]));