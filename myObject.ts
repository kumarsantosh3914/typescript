const User = {
    name: "hitesh",
    email: "santosh@gmail.com",
    isActive: true
};

function createUser({name: string, isPaid: boolean}) {}

let newUser = {name: "santosh", isPaid: false, email: "santosh@gmail.com"};

createUser(newUser);


function createCourse(): {name: string, price: number}{
    return {name: "rectjs", price: 8998};
}

// Type Aliases 

type User = {
    name: string;
    eamil: string;
    isActive: boolean;
};

function createUser1(user: User): User {
    return {name: "", eamil: "", isActive: true};
}


type User1 = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    credcardDetails?: number;
}

let myUser: User1 = {
    _id: "3242",
    name: "s",
    email: "santu@gmail.com",
    isActive: false,
}

myUser.email = "santosh@gmail.com";


type cardNumber = {
    cardnumber: string;
}

type cardDate = {
    cardDate: string;
}

type cardDetails = cardNumber & cardDate & {
    cvv: number;
}

