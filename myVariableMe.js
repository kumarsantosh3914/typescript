var greetings = "Hello Santosh";
console.log(greetings);
// number
var userId = 2342;
// boolean
var isLoggedIn = false;
// any
var hero;
function getHero() {
    return "thor";
}
hero = getHero();
// functions
function addTwo(num) {
    return num + 2;
}
addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("santu", "santosh@gmail.com");
getUpper("santosh");
signUpUser("santosh", "santosh@gmail.com", false);
function addTwo1(num) {
    return num + 2;
}
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 3, 4];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
