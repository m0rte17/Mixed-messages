const beginnings = [
    "Every day is a new opportunity",
    "Don't be afraid of big goals",
    "Your self-confidence",
    "Focus on your dreams",
    "Your perseverance"
]; 

const middles = [
    "will lead you to success",
    "will help you overcome all obstacles",
    "is the key to achievement",
    "will open doors to new opportunities",
    "will make the impossible possible"
];

const endings = [
    "and bring you many joyful moments.",
    "and allow you to reach incredible heights.",
    "and change your life for the better.",
    "and bring satisfaction from every goal achieved.",
    "and turn your dreams into reality."
];

const ansiArt = `
 /$$      /$$                  /$$$$$$  /$$                       /$$                                             /$$      
| $$$    /$$$                 /$$__  $$|__/                      | $$                                            | $$      
| $$$$  /$$$$ /$$   /$$      | $$  \__/ /$$  /$$$$$$   /$$$$$$$ /$$$$$$         /$$  /$$  /$$  /$$$$$$   /$$$$$$ | $$   /$$
| $$ $$/$$ $$| $$  | $$      | $$$$    | $$ /$$__  $$ /$$_____/|_  $$_/        | $$ | $$ | $$ /$$__  $$ /$$__  $$| $$  /$$/
| $$  $$$| $$| $$  | $$      | $$_/    | $$| $$  \__/|  $$$$$$   | $$          | $$ | $$ | $$| $$  \ $$| $$  \__/| $$$$$$/ 
| $$\  $ | $$| $$  | $$      | $$      | $$| $$       \____  $$  | $$ /$$      | $$ | $$ | $$| $$  | $$| $$      | $$_  $$ 
| $$ \/  | $$|  $$$$$$$      | $$      | $$| $$       /$$$$$$$/  |  $$$$/      |  $$$$$/$$$$/|  $$$$$$/| $$      | $$ \  $$
|__/     |__/ \____  $$      |__/      |__/|__/      |_______/    \___/         \_____/\___/  \______/ |__/      |__/  \__/
              /$$  | $$                                                                                                    
             |  $$$$$$/                                                                                                    
              \______/                                                                                                     
`;

function getRandomElement(arr) {
    return arr[Math.floor(Math.random()) * arr.length];
}

function generateMessage() {
    const beginning = getRandomElement(beginnings);
    const middle = getRandomElement(middles);
    const ending = getRandomElement(endings);

    return `${beginning} ${middle} ${ending} 
    ${ansiArt}`;
}

console.log(generateMessage());