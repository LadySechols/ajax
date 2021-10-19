document.getElementById('loadFromAjax').addEventListener('click', function(event) {
	// do something when I click the button

	// 1. create an XMLHttpRequest object
	let xhr = new XMLHttpRequest();

	// 2. tell it where we are making a request
	xhr.open('GET', '/json/users.json');

	// 3. create a function to handle the response
	xhr.onload = function() {
		console.log(this);

		// our server responds with a JSON string
		let response = this.responseText;

		// parse it
		let responseObj = JSON.parse(response);

		// write the output to our DOM
		console.log(responseObj);

		// loop through the JSON object
		// create HTML to display them
		let outputHTML = `
			<table>
				<tr>
					<th>UserID</th>
					<th>Name</th>
				</tr>
		`;
		for ( var i = 0; i < responseObj.length; i++ ) {
			// firstName, lastName, userId
			let firstName = responseObj[i].firstName;
			let lastName = responseObj[i].lastName;
			let userId = responseObj[i].userId;

			outputHTML = outputHTML + `
				<tr>
					<td>${userId}</td>
					<td>${firstName} ${lastName}</td>
				</tr>
			`
		}
		outputHTML = outputHTML + '</table>';

		console.log(outputHTML);

		// write our output HTML to the page
		document.getElementById('contents').innerHTML = outputHTML;
		
	};

	// 4. make the request
	xhr.send();

});