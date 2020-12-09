console.log ("hello world");




// alert("My name is Ngoc Doan"); //gives some information for the user//
// confirm("Are you at least 18?"); //gives options to the user//
// prompt("Do you like the outdorrs?"); //a text box to record an answer//
    //variables can store values using data types//

    var quote = "home is where the Heart is."
    console.log(quote.toUpperCase());


    var currentTime = new Date();
    console.log(currentTime)

    //this will get the time//
    var time = document.getElementById("time");
    time.innerHTML = currentTime.toLocaleTimeString();

    //this will get the date//
    var date = document.getElementById("date");
    date.innerHTML = currentTime.toLocaleDateString();


    //this will get the day of the week//
    var daysofTheWeek = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var dow = document.getElementById("week-day");
    dow.innerHTML = daysofTheWeek[currentTime.getDay()];

