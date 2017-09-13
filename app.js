//program to accept values from user through prompt and display values in console

function billing() {

	var myRecord = 1;
	var recordArray = [];

	for(myRecord; myRecord <= 10; myRecord++){

		var num = prompt('Please enter record # ' + myRecord);
		recordArray.push(num);
	}

	return recordArray;
}

console.log(billing());
