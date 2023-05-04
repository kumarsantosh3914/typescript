let greetings: string = "Hello Santosh";

console.log(greetings);

// number
let userId: number = 2342;

// boolean
let isLoggedIn: boolean = false;

// any

let hero: string;

function getHero() {
    return "thor";
}

hero = getHero();


// functions
function addTwo(num: number) {
    return num + 2;
}

addTwo(5);

function getUpper(val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}


loginUser("santu", "santosh@gmail.com");
getUpper("santosh");

signUpUser("santosh", "santosh@gmail.com", false);


function addTwo1(num: number): number{
    return num + 2;
}

function getValue(myVal: number) {
    if(myVal > 5) {
        return true;
    }
    return "200 OK";
}

const getHello = (s: string): string => {
    return "";
}

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 3, 4];

heros.map((hero: string) => {
    return `hero is ${hero}`;
});


function consoleError(errmsg: string): void {
    console.log(errmsg);
}

function handleError(errmsg: string): never {
    throw new Error(errmsg);
}