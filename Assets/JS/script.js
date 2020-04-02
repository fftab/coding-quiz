// JavaScript for Quiz
// Referenced Fridge Exercise from Week Five
// Received Help from Ikemous and Tutor for this assignment

    // Global Variables
    // =====================================================

    // Declaring Interval
    let interval;

    // Starting Timer at 120 Seconds or 2 Minutes 
    let timeLeft = 120;

    // Variable that will act as index of Question Number
    let currentQuestion = 0;

    // Start Button
    let startButton = document.getElementById("start-test-button");

    // Test Question Div
    let testQuestion = document.getElementById("test-question");

    // Test Answer Div
    let clickOptions = document.getElementById("test-answers");

    // Timer Div
    let timer = document.getElementById("timer");

    // Creating Array of Test Questions
    let testQuestions = [

        "Q1: | How do you declare a function in JavaScript?", 
        "Q2: | How do you link an external JavaScript file called script.js in an HTML document?", 
        "Q3: | How do you call a function in JavaScript?",
        "Q4: | How do you create a for-loop in JavaScript?",
        "Q5: | How do you write an if statement in JavaScript?",
        "Q6: | How do you write a comment in JavaScript?",
        "Q7: | How do you make an array in JavaScript?",
        "Q8: | What kind of letter case is used in JavaScript syntax?",
        "Q9: | How do you round the decimal number 8.24 in JavaScript?",
        "Q10: | How do you indicate inequality in JavaScript?"

    ];

    //Declaring the testanswers Object
    let testAnswers = [

        Q1 = {

            // Question 1
            // "Q1: | How do you declare a function in JavaScript?"
            Q: testQuestions[0],

            //Question 1 Answer Options
            testOptions: [

                "A  function functionName(parameter) { (commands) }", 
                "B  functionName(parameter);", 
                "C  function(functionName) { (commands) }", 
                "D  {(function)}"

            ],

            // Question 1 Answer
            A: "A  function functionName(parameter) { (commands) }"

        },

        Q2 = {

            // Question 2
            // "Q2: | How do you link an external JavaScript file called script.js in an HTML document?"
            Q: testQuestions[1],

            // Question 2 Answer Options
            testOptions: [

                "A  In the Body: <a href='script.js'></a>", 
                "B  In the Head: <script defer src='script.js' type='text/javascript'></script>", 
                "C  In the Body: <script src='script.js' type='text/javascript'", 
                "D  Both B and C"
            ],

            // Question 2 Answer
            A: "D Both B and C"

        },

        Q3 = {

            // Question 3
            //  "Q3: | How do you call a function in JavaScript?"
            Q: testQuestions[2],

            // Question 3 Answer Options
            testOptions: [

                "A  function functionName(argument);",
                "B  functionName(argument);",
                "C  function(argument) { (commands) }",
                "D  function (functionName { (commands) })"
            ],

            // Question 3 Answer
            A: "B  functionName(argument);"

        },

        Q4 = {

            // Question 4
            // "Q4: | How do you create a for-loop in JavaScript?"
            Q: testQuestions[3],

            // Question 4 Answer Options
            testOptions: [

                "A  for (i = 0; i > (break case value); i--) { }",
                "B  for () { i = 0; (break case vlaue); i++ }",
                "C  for (i = 0; i < (break case value); i++) { }",
                "D  A and C"
            ],

            // Question 4 Answer
            A: "D  A and C"
            
        },

        Q5 = {

            // Question 5
            //  "Q5: | How do you write an if statement in JavaScript?"
            Q: testQuestions[4],

            // Question 5 Answer Options
            testOptions: [

                "A  if [ (scenario) ] ( (commands) )",
                "B  if ( (scenario) ) { (commands) }",
                "C  while ( (scenario) ) { (commands) }",
                "D  while [ (scenario) ] ( (commands) )"
            ],

            // Question 5 Answer
            A: "B  if ( (scenario) ) { (commands) }"
            
        },

        Q6 = {

            // Question 6
            // "Q6: | How do you write a comment in JavaScript?"
            Q: testQuestions[5],

            // Question 6 Answer Options
            testOptions: [

                "A  <!-- -->",
                "B  // ",
                "C  /* */",
                "D  Both B and C"
            ],

            // Question 6 Answer
            A: "D  Both B and C"
            
        },

        Q7 = {

            // Question 7
            // "Q7: | How do you make an array in JavaScript?"
            Q: testQuestions[6],

            // Question 7 Answer Options
            testOptions: [

                "A  let arrayName = [ item1, item2, item3 ];",
                "B  let arrayName { item: 1, 2, 3 }",
                "C  array (arrayName) { }",
                "D  All of these are wrong."

            ],

            // Question 7 Answer
            A: "A  let arrayName = [ item1, item2, item3 ];"
            
        },

        Q8 = {

            // Question 8
            // "Q8: | What kind of letter case is used in JavaScript syntax?"
            Q: testQuestions[7],

            // Question 8 Answer Options
            testOptions: [

                "A  UPPERCASE",
                "B  camelCase",
                "C  lowercase",
                "D  PascalCase"
            ],

            // Question 8 Answer
            A: "B  camelCase"
            
        },

        Q9 = {

            // Question 9
            // "Q9: | How do you round the decimal number 8.24 in JavaScript?"
            Q: testQuestions[8],

            // Question 9 Answer Options
            testOptions: [

                "A  Math.round(8.24)",
                "B  Math.ceil(8.24)",
                "C  Math.floor(8.24)",
                "D  A, B and C"
            ],

            // Question 9 Answer
            A: "D  A, B and C"
            
        },

        Q10 = {

            // Question 10
            // "Q10: | How do you indicate inequality in JavaScript?"
            Q: testQuestions[9],

            // Question 10 Answer Options
            testOptions: [

                "A  ===",
                "B  =/=",
                "C  !",
                "D  <="
            ],

            // Question 10 Answer
            A: "C  !"
            
        }

    ]

    // Declaring function to Initialize the Timer
    function initTimer() {
        
        // Function for timer interval
        interval = setInterval(function() {

                // Update Time Left
                timeLeft--;

                // Update Timer
                timer.innerHTML = timeLeft;

                // If Time Is Up
                if (timeLeft === 0) {

                    // Clear Interval
                    clearInterval(interval);

                    // Hide question and answer divs
                    testQuestion.setAttribute("class", "hide");
                    clickOptions.setAttribute("class", "hide");
                    timer.setAttribute("class", "hide");

                    //Function to Load Score Input


                }

        }, 1000);
        
    }

    // declaring the populateQuestion function   
    function populateQuestion() {

        //Clear the Question Question
        document.getElementById("test-question").innerHTML = "";

        // create a header element for question text
        let questionHeader = document.createElement("h3");

        // change question text according to testQuestions at index of currentQuestion
        questionHeader.textContent = testQuestions[currentQuestion];

        // append new question header to test question div dom element
        document.getElementById("test-question").appendChild(questionHeader);

    }


    // Declaring Populate Buttons Function
    function populateButtons() {

        // Clear answer text before adding new text
        document.getElementById("test-answers").innerHTML = "";

        // for loop to create four answer buttons
        for (i = 0;i < 4; i++) {

            // create button elements for answers
            let newButton = document.createElement("button");

            // assign class to answer button elements for styling
            newButton.setAttribute("class", "answer-buttons btn btn-primary");

            // append elem to corresponding div
            clickOptions.appendChild(newButton);

            // text
            newButton.textContent = testAnswers[currentQuestion].testOptions[i];

        }

    }
    
    // adding event listener to clickOptions
    clickOptions.addEventListener("click", function(event) {

        //if clickOptions answer button clicked
        if (event.target.matches("button")) {

            // if answer is not correct
            if (!testAnswers[currentQuestion].A == event.target.textContent) {

                // Detract Ten Seconds from the Timer
                timeLeft -= 10;

            }

            //else if currentQuestion index > length of test questions array
            else if (currentQuestion > testQuestions.length) {

                //clear interval
                clearInterval;
                //load score input function
                scoreInput();

            }

            // increment current question
            currentQuestion++;

            // populate next question and answers
            populateQuestion();
            populateButtons();

        }

    });

    //Function to Load Score Input
    function scoreInput() {

        //Clear Interval
        clearInterval;

        // Input element
        // let inputIntitials = document.getElementById("initials");
            //assign a class
            // inputIntitials.setAttribute("class", );
            //append to DIV

        // Submit button
            //Assign class
            //Assign Text
            //Append to Div

    }
        
    //Function to ScoreBoard 
        

    //Event listener for SUBMIT button
    let submitEvent = document.getElementById("submit");
    submitEvent.onclick = ;

    // Declaring Init Quiz Function
    function initQuiz() {

        //DO LAST//
        // Check Local Storage
            //your scorelist = localStorage(USE JSON.parse)
            //If null 
                //Score array is []

        // Start Screen
        let startScreen = document.getElementById("test-control-container");

        // Setting Hide Attribute to Hide Start Screen
        startScreen.setAttribute("class", "hide");

        // Remove Attribute of Hide for Test Question and Test Answers and Timer Divs (Display)
        testQuestion.removeAttribute("class");
        clickOptions.removeAttribute("class");
        timer.removeAttribute("class");

        // Execute the Timer, Populate Qs and As
        initTimer();
        populateQuestion();
        populateButtons();

    }

    // Adding Event Listener for Start Button to Perform Init Quiz
    startButton.onclick = initQuiz;


    // IGNORE - REFERENCE - IGNORE
    // ===============================================================

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

    // Setting an Event Listener for the Next Question Button
    // document.getElementById("next-question-button").addEventListener("click", function() {

    //     // Declaring Locally
    //     let activeQuestion;
    //     // Creating a Div
    //     activeQuestion.createElement("DIV");

    //     activeQuestion.className("test-question");


    // });

    // Dynamically Create Answer Button Text

    // Test
    // console.log(1);

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