console.log("hello")

function buttonClicked(){
	console.log("it works!");

		// get the user name value from the form 
		var user= document.getElementById("user");
		var userToShow = user.value;
		console.log(userToShow);

		var textToShow = document.getElementById("userToShow");
		textToShow.innerHTML = userToShow

		var comment= document.getElementById("comment");
		var CommentToShow = Name.value;
		console.log(CommentToShow);

		var CommentToShow = document.getElementById("CommentToShow");
		textToShow.innerHTML = CommentToShow
	
}
