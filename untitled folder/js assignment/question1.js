protect_email = function (user_email) {
    var avg, splitted, a, b;
    splitted = user_email.split("@");
    a = splitted[0];
    avg = a.length / 2;
    a= part1.substring(0, (a.length - avg));
    b = splitted[1];
    return a + "...@" + b;
};

console.log(protect_email("akash_gupta@example.com"));