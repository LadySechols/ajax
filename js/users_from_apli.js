// call api, get full list of users

	// create XHR object
	let xhr = new XMLHttpRequest();

	// open request to https://jsonplaceholder.typicode.com/users
	xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

	// write a function to handle the response and render our elements
	xhr.onload = function() {
		console.log(this);
		// parse the list of users and display them in #userList
		// this.responseText 
		let response = JSON.parse(this.responseText);

		// parse that into an object
		console.log(response);

		for ( var i = 0; i < response.length; i++ ) {
			document.getElementById('userListSelection').innerHTML = 
				document.getElementById('userListSelection').innerHTML + 
				`<li>
					${response[i].name} 
					<a href="https://jsonplaceholder.typicode.com/users/${response[i].id}" class="userLink">Edit Details</a>
				</li>`;
		}
		// render that into our screen
		// make a button or link that will let us select an individual user
	}

	// send the request
	xhr.send();

// event listener to look for a user button click
document.getElementById('userListSelection').addEventListener('click', function(event) {
	event.preventDefault();

	if ( event.target.localName == 'a' ) {
	
		// make an xhr object
		let xhr = new XMLHttpRequest();

		// send the request to the HREF of our link
		xhr.open('GET', event.target.getAttribute('href'));

		// handle our load event/render the info to the #individualUser element
		xhr.onload = function() {

			let response = JSON.parse(this.responseText);

			// render the user information correctly
			// id, name, username, email, phone, website
			let outputTable = `
				<table>
					<tr>
						<th>ID</th>
						<td>${response.id}</td>
					</tr>
					<tr>
						<th>Name</th>
						<td>${response.name}</td>
					</tr>
					<tr>
						<th>Username</th>
						<td>${response.username}</td>
					</tr>
					<tr>
						<th>Email</th>
						<td>${response.email}</td>
					</tr>
					<tr>
						<th>Phone</th>
						<td>${response.phone}</td>
					</tr>
					<tr>
						<th>Website</th>
						<td>${response.website}</td>
					</tr>
				</table>
			`;

			document.getElementById('userDetails').innerHTML = outputTable;
		};

		// send the request
		xhr.send();
	} 
	

});
// when button is clicked, call api to load that user
// into #individualUser

