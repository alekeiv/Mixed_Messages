// Step 1: Define arrays for setups, punchlines
const setups = [
    "Why don't scientists trust atoms?",
    "Why did the bicycle fall over?",
    "What do you call fake spaghetti?",
    "Why don't some fish play basketball?",
    "What do you get if you cross a snowman and a vampire?"
  ];

const punchlines = [
    "Because they make up everything!",
    "Because it was two-tired!",
    "An impasta!",
    "Because they're afraid of the net!",
    "Frostbite!"
  ];

// Step 2: Function to get a random element from an array
function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

// Step 3: Combine the random setup, punchline, and reaction
function generateRandomJoke() {
    const randomSetup = getRandomElement(setups);
    const randomPunchline = getRandomElement(punchlines);
    
    return `${randomSetup}\n${randomPunchline}`;
  }

// Step 4: Output the joke to the console
console.log(generateRandomJoke());
console.log(generateRandomJoke()); // Alessio