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

	return false;
}