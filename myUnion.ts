let score: number | string = 33;

score = 44;
score = "55";

type User = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number;
}

let santosh: User | Admin = {
    name: "santosh",
    id: 423,
}

santosh = {username: "sa", id: 89843};

function getDnId(id: number | string) {
    // making some API calls
    console.log(`DB id is: ${id}`);
}

getDnId(3);
getDnId("3");

function getDnId1(id: number | string) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}

// array

const data: number[] = [1, 2, 4, 5, 6];
const data2: string[] = ["1", "2", "3"];
const data3: (string | number)[] = ["1", "2", 4];