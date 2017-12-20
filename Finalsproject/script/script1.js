
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
    	textToShow.innerHTML = " Gender differences in occupations and incomes that favor men over women. In a patriarchal society, men have more wealth than women and more influence in the political and economic worlds more generally. In a patriarchal society, males automatically have certain advantages, including a general freedom from fear of being raped and sexually assaulted and from experiencing job discrimination on the basis of their gender. However, men also suffer certain disadvantages from being male, including higher rates of injury, violence, and death and a lower likelihood of experiencing the joy that parenting often brings.";
	} else if (answerB.checked) {
		console.log(answerB.value);
		textToShow.innerHTML = "The history of sexism, misogyny, and patriarchal oppression is long and well-documented. From whatever angle viewed, it's clear women have endured minimization, harassment, and violence throughout time in their quest to simply BE... be anywhere near a level playing field with men. They've had to transcend stereotypes and cliches of the most ignorant and egregious kind just to accomplish what men have systemically taken for granted: getting the vote, advancing in a job; even getting a job. Legally asserting their independence from and equality with their spouses. Maintaining their dignity. Being seen as valued and contributing members of society throughout their lives. Being judged for who they are and what they've accomplished rather than the chromosomes of their DNA.";
    } else if (answerC.checked) {
        console.log(answerC.value);
        textToShow.innerHTML = "Transgender women, like all gender variant people, face a vast amount of discrimination and transphobia. A 2014 survey from The Williams Institute found that, of 6,546 respondents (self-identified transgender, as well as gender nonconforming), 57% whose families had rejected them attempted suicide, as did 63%-78% of those who suffered physical or sexual violence at school (any level). A survey of roughly 3000 trans women living in the United States, as summarized in the report 'Injustice at Every Turn: A Report of the national Transgender Discrimination Survey', found that trans women reported that: 36% have lost their job due to their gender. 55% have been discriminated against in hiring. 29% have been denied a promotion. 25% have been refused medical care. 60% of the trans women that have visited a homeless shelter reported incidents of harassment there.When displaying identity documents incongruent with their gender identity/expression, 33% have been harassed and 3% have been physically assaulted.20% reported harassment by police, with 6% reporting physical assaulted and 3% reporting sexual assault by an officer. 25% have been treated generally with disrespect by police officers. Among jailed trans women, 40% have been harassed by inmates, 38% have been harassed by staff, 21% have been physically assaulted, and 20% have been sexually assaulted.";
    } else if (answerD.checked) {
        console.log(answerD.value);
        textToShow.innerHTML = "The spotlight on trans issues has mostly been focused on transgender women, and transgender men have been largely left out of the narrative. Our cultural obsession with feminine beauty contributes to the imbalance. ‘Women’s appearances get more attention, women’s actions are commented on and critiqued more than men, so in that world it just makes sense that people will focus more on trans women than trans men’. Experiences of trans men can provide a unique window into how gender functions in American society.  Over and over again, men who were raised and socialized as female described all the ways they were treated differently as soon as the world perceived them as male. They gained professional respect, but lost intimacy. They exuded authority, but caused fear. From courtrooms to playgrounds to prisons to train stations, at work and at home, with friends and alone, trans men reiterated how fundamentally different it is to experience the world as a man.";
    } else if (answerE.checked) {
        console.log(answerE.value);
        textToShow.innerHTML = "Sorry, if your gender is not represented in the option above, notify us on one of our social media pages and we will update our database"; 
	}
}
 