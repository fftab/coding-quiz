// Referenced Fridge Exercise from Week Five

let interval;
let timeLeft = 10;
let currentQuestion = 0;

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



    let testAnswers = [

        Q1 = {

            Q: testQuestions[0],

            testOptions: [

                "A", "B", "C", "D"

            ],

            A: "A"

        },

        Q2 = {

            Q: testQuestions[1],

            testOptions: [

                "A", "B", "C", "D"
            ],

            A: "B"
        }

    ]

    

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

                //Function to Load Score Input


            }

        }, 1000
        
        );
        
    }

    // fucntion to initilalize program
        //DO LAST//
        // Check Local Storage
            //your scorelist = localStorage(USE JSON.parse)
            //If null 
                //Score array is []

        // Create Your main header
            //Header Text
            //Append To test questions

        // Create Start button
            //Give Class
            //Give Text
            //Append test answers

    //Event listener For your START button
        //Call populate question
        //Call populate Buttons
        //Call Init Timer

    //Function to Load Score Input
        //Clear Interval

        // Input element
            //assign a class
            //append to DIV
        // Submit button
            //Assign class
            //Assign Text
            //Append to Div
    
    //Function to ScoreBoard 
        

    //Event listener for SUBMIT button


    initTimer();

    populateQuestion();

    function populateQuestion() {

        document.getElementById("test-question").innerHTML = "";

        let questionHeader = document.createElement("h3");

        questionHeader.textContent = testQuestions[currentQuestion];

        document.getElementById("test-question").appendChild(questionHeader);

    }

    function populateButtons() {

        document.getElementById("test-answers").innerHTML = "";

        for (i = 0;i < 4; i++) {

            // create button elem
            let newButton = document.createElement("button");

            // assign class to elem
            newButton.setAttribute("class", "answer-buttons");

            // append elem to corresponding div
            document.getElementById("test-answers").appendChild(newButton);

            // text
            newButton.textContent = testAnswers[currentQuestion].testOptions[i];

        }

    }

    populateButtons();

    let clickOptions = document.getElementById("test-answers");
    
    clickOptions.addEventListener("click", function(event) {

        //if click
        if (event.target.matches("button")) {

            // Test
            // console.log(1);

            // if answer is not correct
            if (!testAnswers[currentQuestion].A == event.target.textContent) {

                // Detract Time from the Timer

                timeLeft--;

            }
            //else if questions > length of questions
                //clear interval
                //load score input function

            // increase question increment
            currentQuestion++;

            // populate next question
            populateQuestion();
            populateButtons();


        }

    });
    // // Creating a for-loop to iterate through the testQuestions
    // for (let i = 0; i < testQuestions.length; i++) {

    //     // Creating a header 3 HTML element for each test question
    //     let question = document.createElement("header"); // ERROR, creatElement not defined?

    //     // Adding class of card header to each question
    //     question.className = "card-header";

    //     // Setting data attribute
    //     question.setAttribute("data-question", testQuestions[i]);

    //     // Setting the element text to the idex as it loops through the testQuestions array
    //     question.innerHTML = testQuestions[i];

    //     // Appending each question to the the test-question ID div
    //     document.getElementById("test-question").append(question);

    // }