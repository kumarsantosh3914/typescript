var score = 33;
score = 44;
score = "55";
var santosh = {
    name: "santosh",
    id: 423,
};
santosh = { username: "sa", id: 89843 };
function getDnId(id) {
    // making some API calls
    console.log("DB id is: ".concat(id));
}
getDnId(3);
getDnId("3");
function getDnId1(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
// array
var data = [1, 2, 4, 5, 6];
var data2 = ["1", "2", "3"];
var data3 = ["1", "2", 4];
