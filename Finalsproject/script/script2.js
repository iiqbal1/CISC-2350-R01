
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

    
    //Also access empty div from HTML, where you will later be putting your text
    var textToShow = document.getElementById("textToShow");

    
    /* write an if statement that checks which option was chosen
    and then displays different text for each */
    if (answerA.checked) {
    	//log to see if you're getting correct value
    	// you can remove this later
    	console.log(answerA.value);
    	//place your text in HTML
    	textToShow.innerHTML = " The American upper class is a social group consisting of the people who have the highest social rank and who are usually rich. People of this social class are socioeconomically distinguishable from other classes by its greater influence, power, and wealth. The American upper class is composed of members born into this class, called members of old money; as well as those who have acquired their wealth and influence within their own generation, called the Nouveau riche. In a CNBC Millionaire Survey it can be observed that a majority of millionaires polled, representing the wealthiest 10 percent of Americans, described themselves as middle class (44%) or upper middle class (40%).";
	} else if (answerB.checked) {
		console.log(answerB.value);
		textToShow.innerHTML = "The history of sexism, misogyny, and patriarchal oppression is long and well-documented. From whatever angle viewed, it's clear women have endured minimization, harassment, and violence throughout time in their quest to simply BE... be anywhere near a level playing field with men. They've had to transcend stereotypes and cliches of the most ignorant and egregious kind just to accomplish what men have systemically taken for granted: getting the vote, advancing in a job; even getting a job. Legally asserting their independence from and equality with their spouses. Maintaining their dignity. Being seen as valued and contributing members of society throughout their lives. Being judged for who they are and what they've accomplished rather than the chromosomes of their DNA.";
    } else if (answerC.checked) {
        console.log(answerC.value);
       } textToShow.innerHTML = " The American upper class is a social group consisting of the people who have the highest social rank and who are usually rich. People of this social class are socioeconomically distinguishable from other classes by its greater influence, power, and wealth. The American upper class is composed of members born into this class, called members of old money; as well as those who have acquired their wealth and influence within their own generation, called the Nouveau riche. In a CNBC Millionaire Survey it can be observed that a majority of millionaires polled, representing the wealthiest 10 percent of Americans, described themselves as middle class (44%) or upper middle class (40%)."
}
 