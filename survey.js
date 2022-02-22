const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What name do you go by? ", (answer1) => {
  rl.question("Where do you work? ", (answer2) => {
    rl.question("What do enjoy listening to? ", (answer3) => {
      rl.question("What is your favourite thing to eat? ", (answer4) => {
        rl.question("What is your favourite meal to cook? ", (answer5) => {
          rl.question("What is your favourite sport? ", (answer6) => {
            rl.question("What is one thing that you wish you could do? ", (answer7) => {
              console.log(`${answer1} works at ${answer2} for a living. In my free time I enjoy listening to ${answer3}. My favourite thing to eat is ${answer4}, but I really enjoy cooking ${answer5}. My favourite sport is ${answer6} and if I could I would ${answer7}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
