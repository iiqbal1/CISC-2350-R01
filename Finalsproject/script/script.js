
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
    	textToShow.innerHTML = "Many people misunderstand what white privilege is. They think it means that whites don't struggle. That's not the case. It means that the quality of struggles are different than other racial groups because whites are considered the default group by an overwhelming majority of the systems we interact with. The advantages whites have over people of color in our system stem from the insider status. It is not a guarantee of success in life. I understand white privilege as being the product of white prevalence. Prevalent is defined as 1) being in ascendancy: dominant; and 2) generally or widely accepted, practiced, or favored: widespread. It's also worth noting that the words prevalent and prevail come from the same root. White privilege has at its root the goal of whites prevailing over other groups.";
	} else if (answerB.checked) {
		console.log(answerB.value);
		textToShow.innerHTML = "''Black' is associated with everything dark, negative, and unwanted. Black is the color of the pits of hell, coffee that spits out, cats that bring misfortune, rotting food that has been abandoned, and the storm clouds that bring destruction. Black is the color of depression.Being Black in America, more often than not, means being judged before you ever open your mouth. It means knowing that many of the people surrounding you already have the preconceived idea that you are uneducated, loud and ghetto...It means having to hear others respond to the social injustices that we are facing with words like 'All Lives Matter,' as if others saying that 'police need to stop killing unarmed Black men' is offensive and questionable enough for debate'";
    } else if (answerC.checked) {
        console.log(answerC.value);
        textToShow.innerHTML = "To be Asian American, you start to realize that you put more and more of yourself in the American category, and you view the Asian as a slight spin, like Irish, Newyorican, German... Your blood might have come from overseas, but your heart started beating here.";
    } else if (answerD.checked) {
        console.log(answerD.value);
        textToShow.innerHTML = "Hispanics are also the youngest racial or ethnic group in the United States. About a third (17.9 million) of Hispanics in the United States are under 18 and almost 60% are millennials or younger. And while 95% of Hispanics think it's important for future generations to preserve the cultural tradition of speaking Spanish, 71% of them say that it's not necessary to speak the language in order to be considered Hispanic.";
    } else if (answerE.checked) {
        console.log(answerE.value);
        textToShow.innerHTML = "Sorry, if your race is not shown above, notify us on one of our social media pages and we will update our database"; 
	}
}
 