var fortunes = [
    "You will pass your class",
    "You will make more money",
    "You will find the one",
    "You will buy a house",
    "You will make new friends this year",
    "You will have a new car",
    "You will land a job after you graduate",
    "You will pay off all your debt",
    "You will master JS before you know it",
    "You will be stuck but get back up",
];
function tellFortune () {
    var randomNum=Math.floor(Math.random() * fortunes.length);
console.log("Your random # is" + "" + randomNum);
document.getElementById("btn").innerHTML = fortunes[randomNum];
}












// function tellFortune(numChild, jobtitle, partner, location) {
//     var future = " You will be a " + jobtitle + " in " + location + " and married to " + partner + " with " + numChild + " kids ";
//     console.log(future);
// };

// tellFortune(0, "designer", "", "engineer", "", "Denver");
// tellFortune(3, "actor", "", "doctor", "", "Australia");
// tellFortune(5, "poet", "", "hiker", "", "Boulder");
















// console.log("Hello World");



// // function showMessage(firstName, lastName) {
// // // Code goes Here
// // var say="Hello World";
// // alert(say + firstName + lastName);
// // }

// // showMessage("Ngoc", "Doan ");
// // showMessage("Spongebob", "Squarepants");


// // // function tellFortune(num1, num2) {
// // // // Code goes Here
// // // return num1 * num2;

// // // };

// // var result= times(10, 10);
// // console.log(result);

// // function showMessage(children, partner, location, jobtitle); {
// //     // Code goes Here
// //     var say = "Hello World";
// //     alert(0 + Single + Denver + Creative;
// // }
// // showMessage("0", "Single", "Denver", "Creative" "Doan");



























// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.
// You can post the results to the console or to the document. 






// // alert("My name is Ngoc Doan"); //gives some information for the user//
// // confirm("Are you at least 18?"); //gives options to the user//
// // prompt("Do you like the outdorrs?"); //a text box to record an answer//
//     //variables can store values using data types//

//     var quote = "home is where the Heart is."
//     console.log(quote.toUpperCase());


//     var currentTime = new Date();
//     console.log(currentTime)

//     //this will get the time//
//     var time = document.getElementById("time");
//     time.innerHTML = currentTime.toLocaleTimeString();

//     //this will get the date//
//     var date = document.getElementById("date");
//     date.innerHTML = currentTime.toLocaleDateString();


//     //this will get the day of the week//
//     var daysofTheWeek = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
//     var dow = document.getElementById("week-day");
//     dow.innerHTML = daysofTheWeek[currentTime.getDay()];




//     // 1- // Write an expression that uses at least 3 different arithmetic operators.

//     // The expression should equal 42.

//     // Hint: +, -, *, /, and % are possible arithmetic operators

//     // Your Code:

//     var x = 40;
//     var y = 2;
//     var z = x + y
//     console.log(x + y);

//     var number = 7 * 6;
//     console.log(number);

//     console.log(40 + 40 - 38);

//     // var number=7*6
//     // console.log(number);
//     // console.log(10 *40 + 2);


//     // 2- // Create a string with the name of your favorite food. The first letter of the string should be capitalized.

//     // Your Code:

//     var food="Pasta"
//     console.log(food);

//     console.log("Pasta" + " " + food);

//     // 3-// Create an array called egFamily and add "Julia", "James", and your name to the array. Then, print the egFamily to the console using console.log.

//     // Your Code:


//     var egFamily = ["Julia", "James", "Doan"]; 
//     console.log(egFamily);

//     var egFamily2= new Array ('Julia', 'James', 'Mario');
//     console.log(egFamily2);

//     // var egFamily3=
//     // [0]="Julia"
//     // [1]="James"
//     // [2]="Lemon";


//     // 4-// Fix the right side expression so it evaluates to true.
//     // "ALL Strings are CrEaTeD equal" == "All STRINGS are CrEaTED Equal"

//     // Your Code:

//     var answer = "ALL Strings are CrEaTeD equal" == "ALL Strings are CrEaTeD equal";
//     console.log(answer);
//     var boolean = "ALL Strings are CrEaTeD equal" != "All STRINGS are CrEaTED Equal"
//     console.log(boolean);
//     console.log("ALL Strings are CrEaTeD equal" != "All STRINGS are CrEaTED Equal");


//     // 5-// Use this equation and the variables fahrenheit and celsius to print the Fahrenheit equivalent of 12°C.
//     //  Use the Celsius-to-Fahrenheit formula to set the fahrenheit varible:
//     //F = C x 1.8 + 32
//     //Log the fahrenheit variable to the console.

//     // Your Code:

//     var celsius = 12;
//     var fahrenheit = celsius* 1.8 + 32;

//     console.log(fahrenheit);

//     // 6-// Build a string using concatenation by combining the lines from this famous haiku poem by Yosa Buson.

//     // Blowing from the west
//     // Fallen leaves gather
//     // In the east.
//     // Each string should be printed on its own line.

//     // Hint: You will need to use special characters to produce the following output. For a refresher, feel free to review the previous Escaping Strings topic in this lesson.

//     // Your Code:

//     var haiku = "Blowing from the west\n" + "Fallen leaves gather\n" + "In the east." ;
//     console.log(haiku);



//     // 7-// Define two variables called thingOne and thingTwo and assign them values. Print the values of both variables in one console.log statement using concatenation. For example,

//     // red blue
//     // where "red" is the value of thingOne and "blue" is the value of thingTwo. Don't forget to use semicolon at the end of each statement!

//     // Your Code:

//     var thingOne="red"; var thingTwo="blue";
//     console.log(thingOne + " " + thingTwo);

//     // 8- // Create a variable called fullName and assign it your full name as a string.

//     // Your Code:

//     var fullname="John Doe";
//     console.log(fullname);

//     // 9- // Create a variable called bill and assign it the result of 10.25 + 3.99 + 7.15 (don't perform the calculation yourself, let JavaScript do it!). Next, create a variable called tip and assign it the result of multiplying bill by a 15% tip rate. Finally, add the bill and tip together and store it into a variable called total.

//     // Print the total to the JavaScript console.

//     // Hint: 15% in decimal form is written as 0.15_._

//     // TIP: To print out the total with a dollar sign ( $ ) use string concatenation. To round total up by two decimal points use the toFixed() method. To use toFixed() pass it the number of decimal points you want to use. For example, if total equals 3.9860, then total.toFixed(2) would return 3.99.

//     // Your Code:


//     var bill = 10.25 + 3.99 + 7.15;
//     var tip = 0.15 * bill;
//     var total = tip + bill;
//     console.log("$"+ total.toFixed(2));

//     // 10- // "Hi, my name is Julia. I love cats. In my spare time, I like to play video games."
//     // "Hi, my name is James. I love baseball. In my spare time, I like to read."
//     // Declare and assign values to three variables for each part of the sentence that changes (firstName, interest, and hobby).

//     // Use your variables and string concatenation to create your own awesome message and store it in an awesomeMessage variable. Finally, print your awesome message to the JavaScript console.

//     // Your Code:


//     var firstName = "Julia";
//     var interest = "cats";
//     var hobby = "play video games";

//     var awesomeMessage = "Hi, my name is "+ firstName + "." + " I love " + interest + "." +  " In my spare time, I like to "+ hobby + ".";
//     console.log(awesomeMessage);

    // -11- //Create 2 variables one called big and one called small. Set the strings to each: "I am Big like a elepant!" "I am Small like a mouse!". Use string methods to make the 
    //'small' variable lowercase and the 'big' variable capital.
    //console.log out the results





















    // var name="Ngoc"; //string
    // var age= 26; //number
    // var favFood="Pasta" //
    // var isHungry= true; //Boolean true/false
    // var dayofWeek= ["Monday", "Tuesday", "Wednesday", "Thursday"]; //array list of items

    // // console.log(name + age + favFood);

    // alert('Welcome' + ' ' + name + age +' + favFood');

    // console.log (dayofWeek[2]);














