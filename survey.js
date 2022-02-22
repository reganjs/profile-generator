const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const answer = {};

rl.question("What name do you go by? ", name => {
  console.log("Your answer: ", name);
  answer.name = name;
  rl.question("Where do you work? ", job => {
    console.log("Your answer: ", job);
    answer.job = job;
    rl.question("What do enjoy listening to? ", music => {
      console.log("Your answer: ", music);
      answer.music = music;
      rl.question("What is your favourite thing to eat? ", favouriteMeal => {
        console.log("Your answer: ", favouriteMeal);
        answer.favouriteMeal = favouriteMeal;
        rl.question("What is your favourite meal to cook? ", favouriteDinnerToMake => {
          console.log("Your answer: ", favouriteDinnerToMake);
          answer.favouriteDinnerToMake = favouriteDinnerToMake;
          rl.question("What is your favourite sport? ", favouriteSport => {
            console.log("Your answer: ", favouriteSport);
            answer.favouriteSport = favouriteSport;
            rl.question("What is one thing that you wish you could do? ", dream => {
              console.log("Your answer: ", dream);
              answer.dream = dream;
              
              //prints out the users profile
              console.log(`${answer1} works at ${answer2} for a living. In my free time I enjoy listening to ${answer3}. My favourite thing to eat is ${answer4}, but I really enjoy cooking ${answer5}. My favourite sport is ${answer6} and if I could I would ${answer7}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
