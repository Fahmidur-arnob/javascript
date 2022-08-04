

function getAverage (ass1, ass2, ass3){
    const total = ass1 + ass2 + ass3;
    const average = total / 3;
    return average;
}

let assign1 = 59;
let assign2 = 55;
let assign3 = 58;

let result = getAverage(assign1, assign2, assign3);
console.log(result);