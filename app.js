//problem sets

//write a function that takes an array of numbers and returns the sum of the array.

function sumOfArr(sumArr){
	let theSum = 0;
	for (let i = 0; i < sumArr.length; i++){
		theSum += sumArr[i];
	}
	return theSum;
}

console.log(`The sum of the array is ${sumOfArr([1,2,3,4,5])}`);


//write a function that takes an array of strings and returns the longest string in the array

function longestString(theString){
	let getString = "";
	for(let i = 0; i < theString.length; i++){
		if(theString[i].length > getString.length){
			getString = theString[i];
		}
	}
	return getString;
}

console.log(`The longest string in the array is ${longestString(["umbrella", "keeps", "me", "half-dryed", "in", "the", "rain"])}`);



//write a function that takes an array of numbers and returns an array of the even numbers in the array


function theEvenNums(evenNums){
	let arrOfEvenNums = [];
	for(let i = 0; i < evenNums.length; i++){
		if(evenNums[i] % 2 === 0){
			arrOfEvenNums[arrOfEvenNums.length] = evenNums[i];
		}
	}
	return arrOfEvenNums;
}


console.log("The even numbers in the array is", theEvenNums([1,2,3,4,5,6]));


//write a function that takes an array of numbers and returns an array of the numbers in reverse order

function reverseArrNums(reverseArr){
	let reversedArr = [];
	for(let i = reverseArr.length - 1; i >= 0; i--){
		reversedArr[reversedArr.length] = reverseArr[i];
	}
	return reversedArr;
}


console.log("The reversed array is", reverseArrNums([1,2,3,4,5,6]));



//a word is given, write a function to tell if the word is a palindrome

function findPalindrome(word){
	let theWord = "";
	for(let i = word.length - 1; i >= 0; i--){
		theWord += word[i];
	}
	if(word === theWord){
		console.log(`${word} is a palindrome`);
	}
	else{
		console.log(`${word} is not a palindrome`);
	}
}

findPalindrome("lole");



//create a person object and create a method in the person object to update the name in the person object


let person = {
	 name1:"Fred",
	 changeName:function(theName){
		return this.name1 = theName
	}
}

//person.changeWord("Benny")
person.changeName("Rogers");
console.log(person.name1);



//create an array of objects representing books, each book should have properties for title and authors. 
//write a function that takes the array of books and returns an array of all the book titles

let theArrOfBooks = [
	book1 = {
		title: "Mastery",
		author: "Robert Green"
	},
	book2 = {
		title: "Think and Grow Rich",
		author: "Napoleon Hill"
	},
	book3 = {
		title: "The 48 Laws of Power",
		author: "Robert Greene"
	}
]

function theTitleOfBooks(bookTitles){
	let theBookTitles = []
	for(i = 0; i < bookTitles.length; i++){
		theBookTitles[theBookTitles.length] = bookTitles[i].title
	}
	return theBookTitles
}


console.log(theTitleOfBooks(theArrOfBooks))





//create an array of objects representing students. each students should have properties for name and grade
//write a function that takes the array of students and returns an array of students name who have a grade higher than 90


let students = [
	student1 = {
		name:"Fred Rogers",
		grade:86
	},

	student2 = {
		name:"Grace Encore",
		grade:93
	},

	student3 = {
		name:"Varma Cephas",
		grade:98
	},

	student4 = {
		name:"Percy Jackson",
		grade:89
	}
]


function aPlusStudents(theStudent){
	let studentsWithA = [];
	for(let i = 0; i < theStudent.length; i++){
		if(theStudent[i].grade >= 90){
			studentsWithA[studentsWithA.length] = theStudent[i].name;
		}
	}
	return studentsWithA;
}


console.log(aPlusStudents(students))





//given an array of numbers, write a function that returns a new array with the numbers sorted in descending order

function givenArrOfNums(givenNums){
	let theGivenNum = [];
	let x = 0
	for(let i = 0; i < givenNums.length; i++){
		
		if(givenNums[i] > 0){
			theGivenNum[theGivenNum.length] = givenNums[i];
		}
	}
	return theGivenNum
}

console.log(givenArrOfNums([11,21,33,55,68]))



//create a object called circle with the properties radius. 
//create a method in the object that calculates the circumference of the cirlce based on it's radius


let circle = {
	radius1: 9,
	radius2: 45.2,
	getCircumference: function(){
		return 2 * 3.14 * this.radius1
	}
}

console.log(circle.getCircumference())
