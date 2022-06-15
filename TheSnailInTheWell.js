    
    //apply command "npm install prompt-sync" if prompt-sync not installed.

    const prompt = require('prompt-sync')({sigint: true});


    let depth = prompt('Enter a number: ');   //42
    let days = 0;


    for (let i = 0; depth >= 5; i++) 
    {
        depth = depth - 5;
        days++;

      }


    if (depth >= 2.5)
    {
        days++
    }
     
    console.log("days = ",days);

