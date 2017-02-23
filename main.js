var firstName;
var birthDayObj;
var WeekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function calZodiac(){
	firstName = document.getElementById('fname').value;
	lastName = document.getElementById('lname').value;
	birthDayObj = new Date(document.getElementById('bday').value);

	var whichDayNdx = birthDayObj.getDay();
	console.log('whichDayNdx is ' + whichDayNdx);

	var outputArea = document.getElementById('displayMsg');
	outputArea.innerHTML = 'Hello ' + firstName + ' you were born on a ' + WeekDays[whichDayNdx];

	var whichMonth = birthDayObj.getMonth();
	console.log('whichMonth is ' + whichMonth);

	var whichDayOfMonth = birthDayObj.getDate();
	console.log('whichDayOfMonth is ' + whichDayOfMonth);

	var age = (Date.now() - birthDayObj) / 1000 / 60 / 60 / 24 / 365;
		age= Math.floor(age)
	console.log('age is' + age);

	whichMonth ++;
	whichDayOfMonth ++;

	var AstroSign;

	if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
		AstroSign = "Capricorn and your breakfast personality is oatmeal";
	}
	else if ((whichMonth == 1 && whichDayOfMonth >= 21) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    AstroSign = "Aquarius and your breakfast personality is pancakes";
  } else if((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    AstroSign = "Pisces and your breakfast personality is donut";
  } else if((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 20)) {
    AstroSign = "Aries and your breakfast personality is bacon";
  } else if((whichMonth == 4 && whichDayOfMonth >= 21) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    AstroSign = "Taurus and your breakfast personality is scrambled eggs";
  } else if((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 20)) {
    AstroSign = "Gemini and your breakfast personality is cereal";
  } else if((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    AstroSign = "Cancer and your breakfast personality is french toast";
  } else if((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 23)) {
    AstroSign = "Leo and your breakfast personality is cold leftover pizza";
  } else if((whichMonth == 8 && whichDayOfMonth >= 24) || (whichMonth == 9 && whichDayOfMonth <= 23)) {
    AstroSign = "Virgo and your breakfast personality is avocado toast";
  } else if((whichMonth == 9 && whichDayOfMonth >= 24) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    AstroSign = "Libra and your breakfast personality is blueberry waffles";
  } else if((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 22)) {
    AstroSign = "Scorpio and your breakfast personality is coffee and a cigarette";
  } else if((whichMonth == 11 && whichDayOfMonth >= 23) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    AstroSign = "Sagittarius and your breakfast personality is an everything bagel";
	}
	else
	{
		AstroSign = "Error";
	}

 
	var outputArea = document.getElementById('displayMsg');
	outputArea.innerHTML = 'Hello '+ firstName + ' ' + lastName + '!' + ' You are ' + age + ' years old and' +' you were born on a ' + WeekDays[whichDayNdx] + '.' + ' Your zodiac sign is ' + AstroSign + '.';
	
	
	return false;
}