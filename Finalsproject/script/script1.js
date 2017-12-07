
//function that is being executed after the button is clicked
function submitData() {
    console.log("hello");

    // Access all the elements from HTML
    // 1. HTML form that holds all the answers
    // 2. radio input options one by one
    var myAnswer = document.getElementById("race");
    var answerA = document.getElementById("answerA");
    var answerB = document.getElementById("answerB");
    var answerC = document.getElementById("answerC");
    var answerD = document.getElementById("answerD");
    var answerE = document.getElementById("answerE");
    
    //Also access empty div from HTML, where you will later be putting your text
    var textToShow = document.getElementById("textToShow");

    
    /* write an if statement that checks which option was chosen
    and then displays different text for each */
    if (answerA.checked) {
    	//log to see if you're getting correct value
    	// you can remove this later
    	console.log(answerA.value);
    	//place your text in HTML
    	textToShow.innerHTML = " The overall concept of what makes someone masculine has greatly changed. Despite these changes, there is a consistent outline that masculinity seems to follow. Our class narrowed down these traits to the ideas of the strong-and-silent type, being a protector and provider, and keeping a stoic and brave-like look all the time, and using violence as a form of dealing with issues.";
	} else if (answerB.checked) {
		console.log(answerB.value);
		textToShow.innerHTML = "The history of sexism, misogyny, and patriarchal oppression is long and well-documented. From whatever angle viewed, it's clear women have endured minimization, harassment, and violence throughout time in their quest to simply BE... be anywhere near a level playing field with men. They've had to transcend stereotypes and cliches of the most ignorant and egregious kind just to accomplish what men have systemically taken for granted: getting the vote, advancing in a job; even getting a job. Legally asserting their independence from and equality with their spouses. Maintaining their dignity. Being seen as valued and contributing members of society throughout their lives. Being judged for who they are and what they've accomplished rather than the chromosomes of their DNA.";
    } else if (answerC.checked) {
        console.log(answerC.value);
        textToShow.innerHTML = "Overall, the transgender people were younger, poorer, less white and more likely to be unemployed than their cisgender counterparts.";
    } else if (answerD.checked) {
        console.log(answerD.value);
        textToShow.innerHTML = "Transgender adults were more likely to be overweight.Transgender adults were more likely to be uninsured. Transgender adults were more likely to be depressed;"
    } else if (answerE.checked) {
        console.log(answerE.value);
        textToShow.innerHTML = "Sorry, if your gender is not represented in the option above, notify us on one of our social media pages and we will update our database"; 
	}
}
 