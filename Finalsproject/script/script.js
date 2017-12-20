
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
    	textToShow.innerHTML = "Many people misunderstand what white privilege is. They think it means that whites don't struggle. That's not the case. It means that the quality of struggles are different than other racial groups because you are considered the default group by an overwhelming majority of the systems Americans interact with. The advantages you have over people of color in our system stems from the insider status. It is not a guarantee of success in life. White privilege is the product of white prevalence. Prevalent is defined as 1) being in ascendancy: dominant; and 2) generally or widely accepted, practiced, or favored: widespread. It's also worth noting that the words prevalent and prevail come from the same root. White privilege has at its root the goal of whites prevailing over other groups.";
	} else if (answerB.checked) {
		console.log(answerB.value);
		textToShow.innerHTML = "Being Black in America, more often than not, means being judged before you ever open your mouth. It means knowing that many of the people surrounding you already have the preconceived idea that you are uneducated, loud and ghetto...It means having to hear others respond to the social injustices that we are facing with words like 'All Lives Matter,' as if others saying that 'police need to stop killing unarmed Black men' is offensive and questionable enough for debate'";
    } else if (answerC.checked) {
        console.log(answerC.value);
        textToShow.innerHTML = "50.5% percentage of Asians, age 25 and older, who have a bachelor's degree or higher level of education. Asians have the highest proportion of college graduates of any race or ethnic group in the country and this compares with 28 percent for all Americans 25 and older.21.2% percentage of Asians, age 25 and older, who have an advanced degree (e.g., Master's, Ph.D., M.D. or J.D.). This compares with 10 percent for all Americans 25 and older. However, there is a glass ceiling for Asians in America. Asians and Asian-Americans are well-represented in lower-level positions.Seventy-three percent of the senior executives, men and women, are white. The rest are 21% Asian, 3% Latino/a, 2% black, 0.6% two or more races, 0.2% Native American and 0.1% Native Hawaiian or Pacific Islander.";
    } else if (answerD.checked) {
        console.log(answerD.value);
        textToShow.innerHTML = "Hispanics are also the youngest racial or ethnic group in the United States. About a third (17.9 million) of Hispanics in the United States are under 18 and almost 60% are millennials or younger.  Hispanic/Latino immigrants deal with the effects of the challenging immigration experience. Additionally, Hispanics/Latinos have low levels of educational attainments and low SES. In fact, “The high school dropout rate among Latino youths (17%) is nearly three times as high as it is among white youths (6%) and nearly double the rate among blacks (9%). Rates for all groups have been declining for decades. Cárdenas & Kerby (2012) note that Hispanic/Latino enrollment in colleges is growing, but they still lag behind compared to African-Americans.";
    } else if (answerE.checked) {
        console.log(answerE.value);
        textToShow.innerHTML = "Sorry, if your race is not shown above, notify us on one of our social media pages and we will update our database"; 
	}
}
 