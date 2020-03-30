// Referenced Fridge Exercise from Week Five

let interval;
let timeLeft = 10;

    //  Dynamically Create Questions
    // ========================================================================

    // Creating Initial Array of Test Questions
    let testQuestions = [

        "Q1: | How do you declare a function in JavaScript?", 
        "Q2: | How do you link an external JavaScript file called script.js?", 
        "Q3: | How do you call a function in JavaScript?",
        "Q4: | How do you create a for-loop in JavaScript?",
        "Q5: | How do you write an if statement in JavaScript?",
        "Q6: | How do you write a comment in JavaScript?",
        "Q7: | How do you make an array in JavaScript?",
        "Q8: | What kind of letter case is used in JavaScript syntax?",
        "Q9: | How do you round the decimal number 8.24 in JavaScript?",
        "Q10: | How do you indicate inequality in JavaScript?"

    ];

    // Creating a for-loop to iterate through the testQuestions
    for (let i = 0; i < testQuestions.length; i++) {

        // Creating a header 3 HTML element for each test question
        let question = document.createElement("header"); // ERROR, creatElement not defined?

        // Adding class of card header to each question
        question.className = "card-header";

        // Setting data attribute
        question.setAttribute("data-question", testQuestions[i]);

        // Setting the element text to the idex as it loops through the testQuestions array
        question.innerHTML = testQuestions[i];

        // Appending each question to the the test-question ID div
        document.getElementById("test-question").append(question);

    }

    

    // Setting an Event Listener for the Next Question Button
    // document.getElementById("next-question-button").addEventListener("click", function() {

    //     // Declaring Locally
    //     let activeQuestion;
    //     // Creating a Div
    //     activeQuestion.createElement("DIV");

    //     activeQuestion.className("test-question");


    // });

    // Dynamically Create Answer Button Text

    // Initializing the Timer

    function initTimer() {
        
        //Call Function for timer Interval
        interval = setInterval(function() {

            //Update Time Left
            timeLeft--;

            //Update Element
            document.getElementById("timer").innerHTML = timeLeft;

            //Check If Time Is Up
            if (timeLeft === 0) {

                clearInterval(interval);

            }

        }, 1000
        
        );
        
    }

    initTimer();
