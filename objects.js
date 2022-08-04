
let student = {
    id: 2971,
    name: 'Fahmidur Rahman', 
    class: 9, 
    marks: 98, 
    section:'A', 
    varsity:'DIU'
};

let mobile = {
    brand: 'Samsung', 
    price : 25999, 
    storage: '64gb',
    camera: '7mp'
};

let computer = {
    motherBoard: 'MSI', 
    ram: '16gb',
    case: 'Deep-Cool',  
    processor: 'Inter i7 12gen', 
    ssd: 'samsung 980 evo plus', 
    psu: 'deep-cool'
};

console.log(student);
console.log(mobile);
console.log(computer.motherBoard);

computer.motherBoard = 'Deep-cool';

const keysOfObjects = Object.keys(computer);
const valuesOfObjects = Object.values(computer);
// console.log(keysOfObjects);

for(let i = 0; i < keysOfObjects.length; i++){
    console.log(keysOfObjects[i]);
}
console.log();
for(let i = 0; i < valuesOfObjects.length; i++){
    console.log(valuesOfObjects[i]);
}

console.log();
function movie(){
    return "Din-The day";
    return "Poran";
    return "Hawa";
  }

  console.log(movie());