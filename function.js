/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('ball player', 'spain', 'Shaq', 3);
=> "You will be a ball player in spain, and married to Shaq with 3 kids."
*/


/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
outputs the result to the screen like so: "Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/


/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/



/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Jouza")
=> "Hello Jouza"
*/


/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
*/



/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/


/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/

// #1
function tellFortune(numOfChilde, partnerName, geoLocation, jobTitle){
	var sentence = "You will be an " + jobTitle + " in " + geoLocation + " and married to " + partnerName + " with " + numOfChilde + " kids.";
	return sentence;
}

// tellFortune("2","test","jaban", "industrial Engineering")





// #2
function calculateDogAge(puppyAge){
	puppyAge = puppyAge * 7;
	return "Your doggie is " + puppyAge + "years old in dog years!";
}

// console.log(calculateDogAge(2));
// console.log(calculateDogAge(6));





//#3
function calculateSupply(age, amountPerDay){
	var amount = amountPerDay * age * 365;
	return "You will need " + amount + " to last you until the ripe old age of " + age;	
}

// console.log(calculateSupply(24, 2));





//#4
function greetThat(name){
	return "Hello " + name + " ^_^"
}




// #5 
function double(cat) {
  return 2 * x;
} // x isn't defined

// function double(7) {
//   return 2 * 7;
// } // the argument should be variable!

// function double('7') {
//   return 2 * 'x';
// } // result will be NAN! we can't mutiply num by string & the argument should be variable;





//#6 
function double1(x) {
  return 2 * x ;
}
function double2 (x){
  return 2 * x; 
}
function double3(x) {
  return 2 * x;
}





//#7
function cube(num) {
	return num * num * num;
}

// console.log(cube(4))


/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
*/


function multipy(num1, num2) {
	var multiplication = num1 * num2;
	return multiplication;
}





/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

*/


function canIGetADrivingLicense(age) {
	if(age >= 20) {
		return 'yes';
	} 

	var x = 20 - age;
	return 'please come back after ' + x + ' years to get one.';
}




/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

function sameLength(str1, str2) {
	if (str1.length === str2.length)
		return true;
	else 
		return false;
}







/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
function largerNubmer(num1, num2) {
	if (num1 > num2)
		return num1;
	return num2;
}








/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5
*/


function smallerNubmer(num1, num2, num3) {
	var minNum = num1;
	if(num2 < minNum)
		minNum = num2;
	if(num3 < minNum)
		minNum = num3;

	return minNum;
}







/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by
*/

function shorterString(str1, str2, str3, str4, str5){
	var shorterStr = str1;

	if(shorterStr.length > str2.length)
		shorterStr = str2;

	if(shorterStr.length > str3.length)
		shorterStr = str3;
	
	if(shorterStr.length > str4.length)
		shorterStr = str4;
	
	if(shorterStr.length > str5.length)
		shorterStr = str5;
	
	return shorterStr;
}









/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: shorterString("air","school","car","github")
=> school
*/

function longerString(str1, str2, str3, str4){
	var longerStr = str1;

	if(longerStr.length < str2.length)
		longerStr = str2;

	if(longerStr.length < str3.length)
		longerStr = str3;
	
	if(longerStr.length < str4.length)
		longerStr = str4;
	
	
	return longerStr;
}

/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd
Ex: isEven(1)
=> false
Ex: isEven(2)
=> true
*/

function isEven(num) {

	if(num % 2 === 0)
		return true;
	return false;
}






/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even
Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true
*/


function isOdd(num) {

	if(num % 2 === 0)
		return false;
	return true;
}



/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed
Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5
*/

function positive(number) {
	if(number > 0)
		return number;
	else 
		return number * -1;
}



/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.
Ex: fullName("Mohammad","Jouza")
=> "Mohammad Jouza"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/

function fullName(firstName, lastName) {
	return firstName + ' ' + lastName;
}







/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.
Ex: average(1,2,3,4,5)
=> 3
Ex: average(5,7,9,3,5)
=> 5.8
*/

function average(num1, num2, num3, num4, num5) {
	return (num1 + num2 + num3 + num4 + num5) / 5;
}









/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN
Ex: randomNumber()
=> 0.2278
Ex: randomNumber()
=> 0.475
*/

function randomNumber() {
	return Math.random();
}






/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN
Ex: randomBetweenNumbers(1,8)
=> 7.5412
Ex: randomBetweenNumbers(3,100)
=> 23
*/

function randomBetweenNumbers(min, max) {
	if(max === undefined || min === undefined)
		return 'Enter min and max values.';

	return Math.floor(Math.random() * (max - min)) + min
}






/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49
Ex: scoreInUniversty(96)
=> "A"
Ex: scoreInUniversty(3)
=> "F"
Ex: scoreInUniversty(71)
=> "C"
*/

function socreInUniversity(grade){
	if(grade >= 90 && grade < 100)
		return 'A';
	if(grade >= 80 && grade < 90)
		return 'B';
	if(grade >= 70 && grade < 80)
		return 'C';
	if(grade >= 60 && grade < 70)
		return 'D';
	if(grade >= 50 && grade < 60)
		return 'E';
	if(grade < 50)
		return 'F';
}


/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0
Ex: counter()
=> 1
Ex: counter()
=> 2
Ex: counter()
=> 3
*/


function counter(){
	if(counter.num === undefined)
		counter.num = 0;

	counter.num += 1;
	return counter.num;
}








/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset
Ex: counter()
=> 1
Ex: counter()
=> 2
Ex: counter()
=> 3
Ex: resetCounter()
=> 3 and the counter reset now
Ex: counter()
=> 1
Ex: counter()
=> 2
Ex: resetCounter()
=> 2 and the counter reset now
Ex: counter()
=> 1
*/

function resetCounter() {
	var oldValue = counter.num;
	counter.num = 0;
	return oldValue;
}



// solution #2 for question 23 and 24
// var c1 = 0;

// function counter1 () {
// 	c1 = c1 + 1;
// 	return c1;
// }

// function restCounter1() {
// 	var oldValue = c1;
// 	c1 = 0;
// 	return oldValue;
// }








/*
25
// this question is in progress wait
Write a function called guessMe
that will take an argument (number)
if the number not between 0 and 5 [0,1,2,3,4]
it will return "Please insert a number between 0 and 5"
if it is between 0 and 5, and guessed the correct number 0-5 [0,1,2,3,4]
will return "you guess me correctly"
if it is between 0 and 5, and not the same number randomly 0-5 [0,1,2,3,4]
will return "you didnt guess me I was 3"
Ex: guessMe(0)
=> "you didnt guess me I was 3"
Ex: guessMe(10)
=>"Please insert a number between 0 and 5"
Ex: guessMe(-5)
=> "Please insert a number between 0 and 5"
Ex: guessMe(3)
=> "you guess me correctly"
*/

function guessMe(number) {
	var random = Math.floor(Math.random() * 5);
	if(number < 0 || number >= 5)
		return 'Please insert a number between 0 and 5';
	
	if (random === number)
		return "you guess me correctly";
	else 
		return "you didnt guess me I was " + random;
}



/*
26
// this question is in progress wait
Write a function called guessMe
that will take an argument (number)
if the number not between 0 and 5 [0,1,2,3,4]
it will return "Please insert a number between 0 and 5"
if it is between 0 and 5, and guessed the correct number 0-5 [0,1,2,3,4]
will return "you guess me correctly"
if it is between 0 and 5, and not the same number randomly 0-5 [0,1,2,3,4]
will return "you didnt guess me I was 3"
Ex: guessMe(0)
=> "you didnt guess me I was 3"
Ex: guessMe(10)
=>"Please insert a number between 0 and 5"
Ex: guessMe(-5)
=> "Please insert a number between 0 and 5"
Ex: guessMe(3)
=> "you guess me correctly"
*/
