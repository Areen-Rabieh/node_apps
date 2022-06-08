import readline from 'readline';

var score = parseInt(readLine(), 10)
if (score >= 88) console.log("excellent");
    else if (score >= 40 && score < 88)
        console.log("good");
    else console.log("fail");