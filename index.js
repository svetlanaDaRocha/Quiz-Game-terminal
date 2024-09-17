

// import prompt from "prompt-sync"
import prompt1 from 'prompt-sync';
const prompt = prompt1();

// import chalk from 'chalk
import chalk from 'chalk';
const error = chalk.red;
const cyan = chalk.bold.cyan;




// Sample question pool
const questions = {
  Sport: {
      Easy: [
      { question: "Which sport is known as the 'king of sports'?", options: ["Basketball", "Soccer", "Tennis"], answer: 1 },
      { question: "How many players are there on a standard soccer team?", options: ["9", "10", "11"], answer: 2 },
      { question: "In which sport would you perform a slam dunk?", options: ["Volleyball", "Basketball", "Tennis"], answer: 1 },
      { question: "What is the maximum score in a single frame of ten-pin bowling?", options: ["100", "200", "300"], answer: 2 },
      { question: "What is the name of the sport where players use a bat to hit a ball and run around bases?", options: ["Cricket", "Soccer", "Baseball"], answer: 2 }
     ],
     Medium: [
      { question: "Who holds the record for the most goals scored in a single World Cup tournament?", options: ["Pele", "Diego Maradona", "Just Fontaine"], answer: 2 },
      { question: "In which year did the first modern Olympic Games take place?", options: ["1884", "1896", "1900"], answer: 1 },
      { question: "Which tennis player(s) has(have) won the most Grand Slam singles titles in history?", options: ["Roger Federer", "Rafael Nadal", "Margaret Court / Novak Djokovic"], answer: 2 },
      { question: "In which city were the 2008 Summer Olympics held?", options: ["Beijing", "London", "Sydney"], answer: 0 },
      { question: "Which country won the FIFA World Cup in 2014?", options: ["Brazil", "Germany", "Spain"], answer: 1 }
     ],
     Hard: [
      { question: "Which athlete has won the most Olympic gold medals across all sports?", options: ["Michael Phelps", "Usain Bolt", "Larisa Latynina"], answer: 0 },
      { question: "In Formula 1, which driver holds the record for the most pole positions?", options: ["Lewis Hamilton", "Michael Schumacher", "Sebastian Vettel"], answer: 0 },
      { question: "What is the name of the technique in gymnastics where the athlete performs a full rotation while in the air before landing?", options: ["Double Twisting Yurchenko", "Amanar", "Tsukahara"], answer: 0 },
      { question: "Which country won the Rugby World Cup in 1995?", options: ["Australia", "New Zealand", "South Africa"], answer: 2 },
      { question: "In which year was the first Ironman triathlon held?", options: ["1975", "1978", "1980"], answer: 0 }
     ]
  },      
  Science: {
    Easy: [
      { question: "What planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter"], answer: 1 },
      { question: "What is the chemical symbol for water?", options: ["H2O", "CO2", "NaCl"], answer: 0 },
      { question: "What gas do plants absorb from the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide"], answer: 2 },
      { question: "What is the center of an atom called?", options: ["Electron", "Proton", "Nucleus"], answer: 2 },
      { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond"], answer: 2 },
    ],
    Medium: [
      { question: "What is the speed of light?", options: ["150,000 km/s", "600,000 km/s", "300,000 km/s"], answer: 2 },
      { question: "What planet has the most moons?", options: ["Jupiter", "Saturn", "Mars"], answer: 1 },
      { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome"], answer: 1 },
      { question: "What is the chemical formula for table salt?", options: ["NaCl", "KCl", "CaCl2"], answer: 0 },
      { question: "What planet is closest to the sun?", options: ["Venus", "Mercury", "Earth"], answer: 1 },
    ],
    Hard: [
      { question: "What is the atomic number of carbon?", options: ["6", "8", "12"], answer: 0 },
      { question: "Who developed the theory of relativity?", options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei"], answer: 1 },
      { question: "What is the main gas found in the air we breathe?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide"], answer: 1 },
      { question: "What is the chemical name for laughing gas?", options: ["Nitrous Oxide", "Nitric Oxide", "Nitrogen Dioxide"], answer: 0 },
      { question: "What is the most abundant gas in Earth's atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide"], answer: 1 },
    ]
  },
  History: {
    Easy: [
      { question: "Who was the first President of the USA?", options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln"], answer: 1 },
      { question: "In which year did World War I begin?", options: ["1912", "1914", "1916"], answer: 1 },
      { question: "Who discovered America?", options: ["Christopher Columbus", "Leif Erikson", "Amerigo Vespucci"], answer: 0 },
      { question: "Who was the longest-reigning British monarch?", options: ["Queen Victoria", "Queen Elizabeth II", "King George III"], answer: 1 },
      { question: "Who was the first man to step on the moon?", options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong"], answer: 2 }
    ],
    Medium: [
      { question: "Which empire was known as the 'Empire on which the sun never sets'?", options: ["Roman Empire", "British Empire", "Ottoman Empire"], answer: 1 },
      { question: "Who was the first Emperor of China?", options: ["Qin Shi Huang", "Han Wudi", "Tang Taizong"], answer: 0 },
      { question: "Who was the British Prime Minister during World War II?", options: ["Winston Churchill", "Neville Chamberlain", "Clement Attlee"], answer: 0 },
      { question: "In which year did the Titanic sink?", options: ["1905", "1912", "1918"], answer: 1 },
      { question: "Who was the first Emperor of Rome?", options: ["Julius Caesar", "Augustus", "Nero"], answer: 1 },
    ],
    Hard: [
      { question: "What was the primary language of the Byzantine Empire?", options: ["Latin", "Greek", "Aramaic"], answer: 1 },
      { question: "Who was the leader of the Mongol Empire during its peak?", options: ["Kublai Khan", "Genghis Khan", "Tamerlane"], answer: 1 },
      { question: "In which year did the Berlin Wall fall?", options: ["1989", "1991", "1987"], answer: 0 },
      { question: "In which year did the French Revolution begin?", options: ["1799", "1789", "1776"], answer: 1 },
      { question: "Who was the first woman to win a Nobel Prize?", options: ["Rosalind Franklin", "Ada Lovelace", "Marie Curie"], answer: 2 }
    ]
  },
  Entertainment: {
    Easy: [
      { question: "Who played Jack Dawson in Titanic?", options: ["Brad Pitt", "Johnny Depp", "Leonardo DiCaprio"], answer: 2 },
      { question: "Which movie won the Oscar for Best Picture in 1994?", options: ["Pulp Fiction", "Forrest Gump", "Shawshank Redemption"], answer: 1 },
      { question: "Who is known as the 'King of Pop'?", options: ["Elvis Presley", "Michael Jackson", "Prince"], answer: 1 },
      { question: "Who played the character of Harry Potter in the movie series?", options: ["Daniel Radcliffe", "Elijah Wood", "Rupert Grint"], answer: 0 },
      { question: "Who played the character of Jack Sparrow in 'Pirates of the Caribbean'?", options: ["Keira Knightley", "Johnny Depp", "Orlando Bloom"], answer: 1 },
    ],
    Medium: [
      { question: "What is the name of the fictional African country in Black Panther?", options: ["Wakanda", "Zamunda", "Elbonia"], answer: 0 },
      { question: "Who directed 'Inception'?", options: ["Steven Spielberg", "Christopher Nolan", "Martin Scorsese"], answer: 1 },
      { question: "Which movie features the song 'Circle of Life'?", options: ["Aladdin", "Beauty and the Beast", "The Lion King"], answer: 2 },
      { question: "Which movie won the Academy Award for Best Picture in 2020?", options: ["Parasite", "1917", "Joker"], answer: 0 },
      { question: "Who is known as the 'King of Rock and Roll'?", options: ["Elvis Presley", "Chuck Berry", "Little Richard"], answer: 0 },

    ],
    Hard: [
      { question: "Which film is known for the quote 'I'm gonna make him an offer he can't refuse'?", options: ["The Godfather", "Goodfellas", "The Shawshank Redemption"], answer: 0 },
      { question: "In which year was the first 'Star Wars' film released?", options: ["1975", "1977", "1979"], answer: 1 },
      { question: "Which movie features the song 'Let It Go'?", options: ["Frozen", "Moana", "Tangled"], answer: 0 },
      { question: "Who played the character of Forrest Gump in thconst wrong = chalk.yellow;simpliere movie?", options: ["Tom Hanks", "Robin Wright", "Gary Sinise"], answer: 0 },
      { question: "Who directed the movie 'Pulp Fiction'?", options: ["Martin Scorsese", "Francis Ford Coppola", "Quentin Tarantino"], answer: 2 },
    ]
  }
};

// Function to display a question, answer options and get the user's answer. Returns true or false
function askQuestion(question, options, answerIndex) {
  let userAnswer;

  while(true){
  console.log(chalk.bold.white(`\n${question}\n`));  // Displaying the question
  for (let i = 0; i < options.length; i++) {
    console.log(`${i + 1}. ${options[i]}`);  // Displaying all answer options
  }

  userAnswer = parseInt(prompt('Your answer: ')) - 1;  // Users answer transferred to index

  // Check if user's answer is valid
  if (userAnswer < 0 || userAnswer >= options.length){
    console.log(error('Invalid selection! Please enter a valid number.'));
    } else {
        // Check if user's answer is correct
    if (userAnswer === answerIndex){
        console.log(chalk.bold.green('Correct!\n'));
        return true; // Correct answer
       } else {
        console.log(chalk.yellow(`Incorrect! The correct answer was: ${options[answerIndex]}\n`));
        return false;  // Incorrect answer
       }   
   }
 } 

}

// Function to shuffle an array. Fisher-Yates shuffle algorithm (also known as the Knuth shuffle). This algorithm is a well-known and efficient method for randomly shuffling the elements of an array.
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {

      const j = Math.floor(Math.random() * (i + 1)); //Math.random() generates a floating-point number between 0 (inclusive) and 1 (exclusive). Multiplying this by (i + 1) gives a number between 0 and i (inclusive). Math.floor() rounds this number down to the nearest integer, ensuring that j is a valid index in the range 0 to i.

      [array[i], array[j]] = [array[j], array[i]]; // Swap elements. This line uses array destructuring to swap the elements at indices i and j. The value at array[i] is moved to array[j], and the value at array[j] is moved to array[i].

    }
  }
  

// Main game function
function playGame() {
  let score = 0;

  console.log(cyan('Welcome to the Quiz Game!\n'));

// Select category
  const categories = Object.keys(questions); // selecting all the keys from questions object. result: ['Science', 'History', 'Entertainment']
  console.log(chalk.bold.underline('Categories:\n'));
  categories.forEach((cat, index) => console.log(`${index + 1}. ${cat}`)); // Giving for each category numerological order starting from 1 (index + 1)

  let category;

  while(true){
  const categoryInput = prompt(cyan('\nChoose a category: ')); // User will select here 1, 2 or 3 which will in the next step be decreased by 1 to match the actual index of this array
  const categoryIndex = parseInt(categoryInput) - 1; // Convert input (number of selected category) into integer and adjust the index for -1 (since index starts from 0 and not from 1)
  category = categories[categoryIndex]; // from categories array ['Science', 'History', 'Entertainment'], selecting chosen category using categoryIndex
  
  if (category) { 
    console.log(`You selected: ${category}\n`);
    break; // exit the loop if valid category is selected
  } else {
    console.log(error(`Invalid category choice. Please try again.`));
  }
 }


  // Select difficulty
  let difficulty;

  while(true){
  console.log('\n' + chalk.bold.underline('Difficulty Levels') + ': Easy, Medium, Hard\n');
  const difficultyInput = prompt(cyan('Choose a difficulty: '));
  difficulty = difficultyInput.charAt(0).toUpperCase() + difficultyInput.slice(1).toLowerCase(); // Capitalize first letter and convert the rest of the input to lower case

  if (questions[category][difficulty]) {
    console.log(`You selected: ${difficulty}\n`);
    break;
  } else {  
    console.log(error('Invalid difficulty choice. Please try again.'));
 }
}


  // Shuffle questions
  const questionPool = questions[category][difficulty];
  shuffleArray(questionPool);

// Ask question from selected category & difficulty using askQuestion() function
  questionPool.forEach(q => {
     // Shuffle answer options
     const options = [...q.options]; // Create a copy of the options array
     shuffleArray(options);
     
     // Determine the new correct answer index
     const newAnswerIndex = options.indexOf(q.options[q.answer]);

    const correct = askQuestion(q.question, options, newAnswerIndex);
    if (correct) {
      score += { Easy: 1, Medium: 2, Hard: 3 }[difficulty];
    }
  });

  console.log(chalk.bold.underline.green(`\nYour final score is ${score}.\n`));



  while(true){     
    const playAgain = prompt(cyan('Would you like to play again? (Yes/No): '));  

  if (playAgain.toLowerCase() === 'no' || playAgain.toLowerCase() === 'n'){
    console.log(cyan('\nThank you for playing!'));    
    break; 
  } else if (playAgain.toLowerCase() === 'yes' || playAgain.toLowerCase() === 'y') {
    playGame();
    return;
  } else {
    console.log(error('Invalid answer. Please try again.'));
  }
 }

}

playGame();

