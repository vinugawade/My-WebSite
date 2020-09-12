	function sendEmail() { 
	Email.send({ 
		Host: "smtp.gmail.com", 
		Username: "feedback2vinu@gmail.com", 
		Password: "d . .pa.", 
		To: 'feedback2vinu@gmail.com', 
		From: document.getElementById('email').value, 
		Subject: "Feedback To My Web-Site", 
		Body: "Hii It's "+document.getElementById('name').value+",<br>"+document.getElementById('message').value, 
	}) 
		.then(function (message) { 
		alert("Thank You For Feedback..!") 
		}); 
	} 