    const prompt = require('prompt-sync')({sigint: true});

    var year = prompt('enter year?');
    var month = prompt('enter month?');
    var day = prompt('enter day?');
     
    console.log(getWeekDay(year, month, day)); 
 
 
 function getWeekDay(year, month, day) {
    var names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var d = new Date(year, month, day);
    var Day = d.getDay();
    return names[Day];
    
     //complete the function
     
 }