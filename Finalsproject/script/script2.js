
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
    	textToShow.innerHTML = " The American upper class is a social group consisting of the people who have the highest social rank and who are usually rich. People of this social class are socioeconomically distinguishable from other classes by its greater influence, power, and wealth. The American upper class is composed of members born into this class, called members of old money; as well as those who have acquired their wealth and influence within their own generation. Many Politicians, heirs to fortunes, top business executives, CEOs, successful venture capitalists, those born into high society, and some celebrities may be considered members of this class. Some prominent and high-rung professionals may also be included if they attain great influence and wealth. The main distinguishing feature of this class, which is estimated to constitute roughly 1% of the population, is the source of income. While the vast majority of people and households derive their income from wages or salaries, those in the upper class derive their income from investments and capital gains. Estimates for the size of this group commonly vary from 1% to 2% while some surveys have indicated that as many as 6% of Americans identify as 'upper class.' Sociologist Leonard Beeghley sees wealth as the only significant distinguishing feature of this class and, therefore, refers to this group simply as 'the rich.'";
	} else if (answerB.checked) {
		console.log(answerB.value);
		textToShow.innerHTML = "Members of the middle class belong to diverse groups which overlap with each other. Overall, middle-class persons, especially upper-middle-class individuals, are characterized by conceptualizing, creating and consulting. Thus, college education is one of the main indicators of middle-class status. Largely attributed to the nature of middle-class occupations, middle class values tend to emphasize independence, adherence to intrinsic standards, valuing innovation and respecting non-conformity. Politically more active than other demographics, college educated middle class professionals are split between the two major parties"
    } else if (answerC.checked) {
        console.log(answerC.value);
        textToShow.innerHTML = "Being in the lower class in America reduces the opportunity to climb  in the social ladder. It is near impossible to attain higher education; the idea of acquiring a college degree is often out of the question.  Most people in the lower class are forced to work in low paying jobs, making it difficult to attain health care  and financial stability.";
    }
}
 