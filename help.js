

// let taka = 15000; //mobile nite hobe dekhabe;
// let taka = 25000; //puraton computer;
// let taka = 45000; //lenevo yoga laptop;
// let taka = 65000; //gaming laptop
// let taka = 85000; //macbook
let taka = 80000;

if(taka >= 80000){
    console.log("Macbook");
}
else if(taka >= 60000 && taka < 80000){
    console.log("Gaming Laptop");
}
else if(taka >= 40000 && taka < 60000){
    console.log("Lenevo Yoga Laptop");
}
else if(taka >= 20000 && taka < 40000){
    console.log("Puraton Computer");
}
else if(taka < 20000){
    console.log("Mobile nite hobe");
}