

const lyrics = 'tumi bondhu kala pakhi, ami jeno ki\
boshonto kale tomay bolte parini. shada';

function allCharsAreSame(s) {
    let n = s.length;

    for (let i = 1; i < n; i++) {
        if (s[i] != s[0]) {
            return false;
        }
    }
    return true;
}

if (allCharsAreSame(lyrics)) {
    console.log("YES");
}
else {
    console.log("NO");
}