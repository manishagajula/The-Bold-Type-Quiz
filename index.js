var readlineSync = require("readline-sync");
var chalk = require("chalk");
var userName = readlineSync.question("What's your name? ");
console.log("        ");
console.log(chalk.yellow.bgYellow.bold("Welcome to THE BOLD TYPE quiz"));
console.log("         ");
console.log(
  "Hello " +
    chalk.red.bold(userName) +
    " Let's see how big of a " +
    chalk.underline.bold.yellow.bgMagenta("THE BOLD TYPE") +
    " fan you are!"
);

console.log(
  chalk.bold.bgBlue(`\nRULES FOR PLAYING THE GAME:
1. Read the question properly and enter (a,b,c,d) as per your choice of answer.
2. There are total 15 Questions 
  a) LEVEL 1 Contains 5 Questions, 4 CORRECT ANSWERS Will TAKE YOU TO LEVEL 2.
  b) LEVEL 2 Contains 5 Questions, 4 CORRECT ANSWERS Will TAKE YOU TO LEVEL 3.
  c) LEVEL 3 Contains 5 Questions, 4 CORRECT ANSWERS & YOU WIN THE QUIZ.
3. EACH CORRECT ANSWER Will REWARD YOU 5 POINTS. 
4. EACH WRONG ANSWER Will COST YOU 2 POINTS. \n`)
);

if (readlineSync.keyInYN(chalk.bgRed.bold("Shall we begin? ")));

console.log("     ");

var score = 0;

var questions = [
  {
    question: `1. How many seasons of Bold Type are there?
    
    a. 2
    b. 3
    c. 4
    d. 5\n`,

    answer: "d",
    correctAnswer: "5",
  },
  {
    question: `2. Where does Kat, Sutton and Jane work?
    
    a. Scarlet
    b. New York Times
    c. Cosmopolitan
    d. Elle\n`,

    answer: "a",
    correctAnswer: "Scarlet",
  },
  {
    question: `3. Which department is kat edison head of?
    
    a. Fashion
    b. Social media
    c. writing
    d. legal\n`,

    answer: "b",
    correctAnswer: "Social media",
  },
  {
    question: `4. Which instrument has Jackqueline had?
    
    a. Cello
    b. Violin
    c. Guitar
    d. Piano\n`,

    answer: "a",
    correctAnswer: "Cello",
  },
  {
    question: `5. Who does the bathtub belong to?
    
    a. Jaqueline
    b. Richard
    c. Alex
    d. Patrick\n`,

    answer: "b",
    correctAnswer: " Richard",
  },
];

for (var i = 0; i < questions.length; i++) {
  currentQuestions = questions[i];
  play(
    currentQuestions.question,
    currentQuestions.answer,
    currentQuestions.correctAnswer
  );
  console.log("          ");
}

if (score >= 18 && score <= 25) {
  console.log(chalk.bgMagenta.underline.bold("YAY! YOU HAVE UNLOCKED LEVEL-2"));
} else {
  return console.log(
    chalk.bgMagenta.underline.bold("OH! YOU LOSE. THANKS FOR PLAYING")
  );
}
console.log("---------------------------------------------------------------");
console.log("                  ");
console.log(chalk.underline.bold.blue.bgBlueBright("LEVEL 2"));
console.log("                  ");
var questionsTwo = [
  {
    question: `1. Sutton grew up in Newyork.
    
    a. True
    b. False\n`,

    answer: "b",
    correctAnswer: "False",
  },
  {
    question: `2. What is Jane's favorite drink?
    
    a. Liquid coke
    b. Latte martini
    c. Espresso martini
    d. Vodka soda\n`,

    answer: "d",
    correctAnswer: "Vodka soda",
  },
  {
    question: `3. What's Olivers nickname for sutton?
    
    a. Blond
    b. Barbie
    c. Red
    d. Blue\n`,

    answer: "c",
    correctAnswer: "Red",
  },
  {
    question: `4. When Jane quits scarlet, which magazine does she join?
    
    a. Incite
    b. Vogue
    c. New York Times
    d. Pinstripe\n`,

    answer: "a",
    correctAnswer: "Incite",
  },
  {
    question: `5. What was the name of sutton's shotgun?
    
    a. Hyperstrophy
    b. stella
    c. Betsy
    d. Maxstrophy\n`,

    answer: "c",
    correctAnswer: "Betsy",
  },
];

for (var i = 0; i < questionsTwo.length; i++) {
  currentQuestionsTwo = questionsTwo[i];
  play(
    currentQuestionsTwo.question,
    currentQuestionsTwo.answer,
    currentQuestionsTwo.correctAnswer
  );
}

if (score >= 36 && score <= 50) {
  console.log(
    chalk.bgMagenta.underline.bold(
      "FANTASTIC! YOU HAVE UNLOCKED LEVEL 3\nWell.. seems that you know a lot about them."
    )
  );
} else {
  return console.log(chalk.bgMagenta.underline.bold("OH YOU LOST! PLAY AGAIN"));
}
console.log("------------------------------------------------------");
console.log("                  ");
console.log(chalk.underline.blue.bold.bgBlueBright("LEVEL 3"));
console.log("                  ");
var questionsThree = [
  {
    question: `1. Which type of food does Jacqueline likes to cook?
    
    a. Mexican food
    b. french food
    c. Italian food
    d. Cambodian food\n`,

    answer: "d",
    correctAnswer: "Cambodian food",
  },
  {
    question: `2. Which country is Adena originally from?
    
  a. Mexico
  b. Iran
  c. Italy
  d. Germany\n`,

    answer: "b",
    correctAnswer: "Iran",
  },
  {
    question: `3. What is the name of the photographer that Jane and Jacqueline exposed?
    
    a. John Mattison
    b. George Patt
    c. Alina Edward
    d. Pamela Dolan\n`,

    answer: "d",
    correctAnswer: "Pamela Dolan",
  },
  {
    question: `4. What does sutton go home to Pennslyvania to retrieve from her mom's house before to Paris trip?
    
    a. Her lucky travel pillows
    b. Her passport
    c. Her birth certificate
    d. Her childhood teddy bear\n`,

    answer: "c",
    correctAnswer: "Her birth certificate",
  },
  {
    question: `5. Adena is a photographer
    
  a. True
  b. False\n`,

    answer: "a",
    correctAnswer: "True",
  },
];

for (var i = 0; i < questionsThree.length; i++) {
  currentQuestionsThree = questionsThree[i];
  play(
    currentQuestionsThree.question,
    currentQuestionsThree.answer,
    currentQuestionsThree.correctAnswer
  );
}

if (score >= 54 && score <= 75) {
  console.log(
    chalk.bgMagenta.underline.bold(
      "HURRAY!!!! YOU WON! You deserve to be in our scoreboard"
    )
  );
} else {
  return console.log(
    chalk.bgMagenta.underline.bold("YOU HAVE LOST, PLAY AGAIN!")
  );
}

function play(question, answer, correctAnswer) {
  var userAnswer = readlineSync.question(chalk.yellowBright(question));

  if (userAnswer === answer) {
    console.log(chalk.magentaBright.underline("Yes! that's correct"));
    console.log("  ");
    score = score + 5;
  } else {
    console.log(chalk.cyanBright.underline("Nah! that's incorrect"));
    console.log("  ");
    score = score - 2;
    console.log(
      chalk.bgYellow.underline.bold("Correct Answer: " + correctAnswer)
    );
    console.log("  ");
  }
  console.log("Your score is " + score);
  console.log("                       ");
}

var highScores = [
  {
    name: "Kajal",
    score: "\t45",
  },
  {
    name: "Leisha",
    score: "\t20",
  },
  {
    name: "Arnav",
    score: "\t55",
  },
  {
    name: "Tarini",
    score: "\t40",
  },
];

console.log("          ");
console.log(chalk.bgYellow.underline.bold.yellow("YAY! You scored " + score));
console.log("                         ");
console.log(chalk.bgRed("SCOREBOARD"));
console.log("Names \t scores");

for (i = 0; i < highScores.length; i++) {
  currentHighScores = highScores[i];
  console.log(currentHighScores.name, currentHighScores.score);
}
