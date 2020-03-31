// JavaScript for Quiz
// Referenced Fridge Exercise from Week Five
// Received Help from Ikemous for this assignment

    // Declaring Interval
    let interval;

    // Starting Timer at 180 Seconds or 3 Minutes 
    let timeLeft = 180;

    // Variable that will act as index of Question Number
    let currentQuestion = 0;

    //  Dynamically Create Questions
    // ========================================================================

    // Creating Initial Array of Test Questions
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

                "A  function functionName() { }", 
                "B  functionName();", 
                "C  function(functionName) { }", 
                "D  {(function)}"

            ],

            // Question 1 Answer
            A: "A  function functionName() { }"

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

                "A  function functionName();",
                "B  functionName();",
                "C  function() { }",
                "D  function (functionName { })"
            ],

            // Question 3 Answer
            A: "B  functionName();"

        },

        Q4 = {

            // Question 4
            // "Q4: | How do you create a for-loop in JavaScript?"
            Q: testQuestions[3],

            // Question 4 Answer Options
            testOptions: [

                "A  for (i = 0);",
                "B  for () { i = 0; i < something.length; i++ }",
                "C  for (i = 0; i < var",
                "D  "
            ],

            // Question 4 Answer
            A: ""
            
        },

        Q5 = {

            // Question 5
            //  "Q5: | How do you write an if statement in JavaScript?"
            Q: testQuestions[4],

            // Question 5 Answer Options
            testOptions: [

                "A  ",
                "B  ",
                "C  ",
                "D  "
            ],

            // Question 5 Answer
            A: ""
            
        },

        Q6 = {

            // Question 6
            // "Q6: | How do you write a comment in JavaScript?"
            Q: testQuestions[5],

            // Question 6 Answer Options
            testOptions: [

                "A  ",
                "B  ",
                "C  ",
                "D  "
            ],

            // Question 6 Answer
            A: ""
            
        },

        Q7 = {

            // Question 7
            // "Q7: | How do you make an array in JavaScript?"
            Q: testQuestions[6],

            // Question 7 Answer Options
            testOptions: [

                "A  ",
                "B  ",
                "C  ",
                "D  "
            ],

            // Question 7 Answer
            A: ""
            
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
                "D  "
            ],

            // Question 8 Answer
            A: ""
            
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
                "C  !==",
                "D  <="
            ],

            // Question 10 Answer
            A: "C  !=="
            
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