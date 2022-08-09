

function checkingDivisibility() {
    for (let i = 1; i <= 50; i++) {
        if ((i % 3 === 0)) {
            console.log("Foo");
        }
        else if (i % 5 === 0) {
            console.log("Bar")
        }
        else if ((i % 3 === 0) && (i % 5 === 0)) {
            console.log("FooBar");
        }
        else {
            console.log(i);
        }
    }
}

console.log(checkingDivisibility());

const myString = "HelloFahm";
console.log(myString.length)