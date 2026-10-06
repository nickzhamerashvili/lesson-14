

/* object = {
    key - aris chveulebrivi logikuri sityva
    key: value // telefoni, email, misamarti, mamis saxeli, dedis saxeli
    value - number, string, boolean, array, object
}

*/

const height = 173

const obj = {
    name: "Nika",
    age: 21,
    height: height,
    city: "Tbilisi",
    printMyName() {
        console.log(this.name)
    }
    // this - Context - is rac devs objectshi


}

obj.printMyName();


// console.log(obj.name, obj.age, obj.city, obj.height)
// obj.height += 2;
// console.log(obj.name, obj.age, obj.city, obj.height, height)




function nutsa (num) {   // 45 315 375
    return num ** 5;
}

function tako( num1, num2, num3 ) { // 32
    return num1 * num2 + num3
    // 15 * 2 + 3
} 

let answer = nutsa(tako(2, 315, 375));
console.log(answer)



// string

let str = "nika";
// String Number Array Object Boolean Null Undefined - Prototype
str = str.toUpperCase();
str.toLowerCase()
str.endsWith("ika")
str.slice()

// console.log(str)    















