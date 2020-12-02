console.log("Hello,World");

// alert("My name is Ngoc Doan"); //gives some information for the user//
// confirm("Are you at least 18?"); //gives options to the user//
// prompt("Do you like the outdorrs?"); //a text box to record an answer//



//variables can store values using data types//


var currentTime= new Date();
console.log (currentTime);

//this will get the time//

var time = document.getElementById("time");
time.innerHTML = currentTime.toLocaleTimeString();





// var name="Ngoc"; //string
// var age= 26; //number
// var favFood="Pasta" //
// var isHungry= true; //Boolean true/false
// var dayofWeek= ["Monday", "Tuesday", "Wednesday", "Thursday"]; //array list of items

// // console.log(name + age + favFood);

// alert('Welcome' + ' ' + name + age +' + favFood');

// console.log (dayofWeek[2]);








//this will get the date//
var date = document.getElementById("date");
date.innerHTML = currentTime.toLocalDateString();


//this will get the day of the week//


