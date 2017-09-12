var students = new Array();
var grades = new Array();
var i = 'y';

while(i != 'n' && i != 'N'){
	var setStudent = prompt('Student Name:');
	students.push(setStudent);

	var setGrade = prompt('Grade:');
	grades.push(setGrade);

	i = prompt("would you like to add another entry? y for yes, n for no");
}

for( var j = 0; j < students.length; j++){
	console.log(students[j] + " scored a " + grades[j] + " on the exam ");
}