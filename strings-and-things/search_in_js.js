

const lyrics = "tumi bondhu kala pakhi, ami jeno ki\
boshonto kale tomay bolte parini. shad";

// const doesExist = lyrics.includes('shada');

// if(doesExist){
//     console.log("YES");
// }
// else{
//     console.log("NO");
// }

// function checkingIfSomeWordExistInStringOrNot(s) {
//     let n = s.length;

//     for (let i = 1; i < n; i++) {
//         if (s.includes("shada")) {
//             return true;
//         }
//     }
//     return false;
// }

// if (checkingIfSomeWordExistInStringOrNot(lyrics)) {
//     console.log("YES");
// }
// else {
//     console.log("NO")
// }

function doesExist(s) {
    let checker = "shada";
    let n = s.length;
    for (let i = 1; i < n; i++) {
        if (s.match("shada")) {
            return true;
        }
    }
    return false;
}
if (doesExist(lyrics)) {
    console.log("YES");
}
else {
    console.log("NO");
}