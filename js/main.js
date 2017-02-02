var firstName;
var birthDayObj;
var WeekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function calZodiac(){
	firstName = document.getElementById('fname').value;
	birthDayObj = new Date(document.getElementById('bday').value);

	var whichDayNdx = birthDayObj.getDay();
	console.log('whichDayNdx is ' + whichDayNdx);

	var outputArea = document.getElementById('displayMsg');
	outputArea.innerHTML = 'Hello ' + firstName + ' you were born on a ' + WeekDays[whcihDayNdx];

	var whichMonth = birthDayObj.getMonth();
	console.log('whichMonth is ' + whichMonth);

	var whichDayOfMonth = birthDayObj.getDate();
	console.log('whichDayOfMonth is ' + whichDayOfMonth);

	whichMonth ++;
	whichDayOfMonth ++;

	var AstroSign;

	if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
		AstroSign = "Cap";
	}

	var outputArea = document.getElementById('displayMsg');
	outputArea.innerHTML = 'Hello '+ firstName + ' you were born on a ' + WeekDays[whichDayNdx] + ' your zodiac sign is ' + AstroSign;
	

	return false;
}