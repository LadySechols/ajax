document.getElementById('loadFromAjax').addEventListener('click', function(event) {
	// do something when I click the button

	// 1. create an XMLHttpRequest object
	let xhr = new XMLHttpRequest();

	// 2. tell it where we are making a request
	xhr.open('GET', 'page2.html');

	// 3. create a function to handle the response
	xhr.onload = function() {
		console.log(this);

		document.getElementById('contents').innerHTML = this.responseText;
	};

	// 4. make the request
	xhr.send();

});