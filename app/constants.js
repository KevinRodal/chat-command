var utils = require('./utils.js');

var composeJoke = function(question, answer) {
	return {
		question: question,
		answer: answer
	};
};

var jokes = [
	composeJoke('Why is Mercy the top support?', 'Because she has high heals!'),
	composeJoke('What did Pharah say during the hail storm?', 'Just ice rains from above!'),
	composeJoke('What did Zenyatta say when Tracer asked if he had something in his eye?', 'Yes, it\'s in the iris'),
	composeJoke('Tracer, D.Va and Mei walk into a bar.', 'Only Mei walks out...'),
	composeJoke('What\'s a more appropriate name for Ana\'s ultimate?', 'Nanaboost!'),
	composeJoke('Why didn\'t Zarya get in front of the rest of her team?', 'She was Russian, and everyone else was Stalin.'),
	composeJoke('Why is capture the flag Mccree\'s favorite game mode?', 'Because every round ends in a draw.'),
	composeJoke('What do you call a Mercy that only pockets a Roadhog?', 'A Hogpocket :D'),
	composeJoke('How did Widowmaker describe an assassination in Mexico?', 'Juan shot, Juan kill.'),
	composeJoke('Why did McCree invite Reinhardt to his birthday party?', 'Because he was a fan of hammers.'),
	composeJoke('Why is Lúcio no aloud in the produce section?', 'He always drops the beets.'),
	composeJoke('Reinhardt, Roadhog, and Winston walk into a bar.', 'Torbjorn walks under it.'),
	composeJoke('Is Zarya\'s hair color natural?', 'Yes, because heroes never dye!'),
	composeJoke('What did everyone think about Reinhardt\'s ult?', 'The enemy team didn\'t like it, but the ground was cracking up.'),
	composeJoke('Why doesn\'t Junkrat eat Taco Bell?', 'Too much fire in the hole.'),
	composeJoke('Why isn\'t Widow maker talking to Torbjorn?', 'They just don\'t see thigh to eye.'),
	composeJoke('How come Soldier: 76 understands Bastion?', 'Bastion uses Morris\' code.'),
	composeJoke('Why was Winston disappointed when Ana used her ultimate on him?', 'He thought she said "nanner boost"')
];

var slothFacts = [
	"The prehistoric sloth Megatherium wasn’t small and cute – he was about six or seven metres tall and weighed between four and seven tonnes.",
	"There are two types of sloth – the two-toed sloth and the slightly smaller and slower three-toed sloth. However, all sloths have three toes. The difference is the two-toed sloth has two fingers on each hand.",
	"Instead of staying in the trees all the time, sloths also enjoy a dip and are excellent swimmers – they can hold their breath underwater for up to 40 minutes.",
	"Sloths don’t sweat and have no body odour, which helps them avoid predators.",
	"While sloths in captivity can sleep for up to 20 hours a day those in the wilds of Central and South America only need eight or nine hours a day – a bit like us.",
	"Sloths hate eagles. Harpy eagles have such strong eyesight and such strong claws that they can spot a sloth in a tree, swoop in and take it from the branches, killing it instantly.",
	"Sloths spend almost all of their time in the trees of rainforests and almost always they hang upside down. According to a study carried out by Swansea University, they are able to do this because their internal organs are fixed to the rib cage to stop them weighing down on their lungs.",
	"Sloths only defecate once a week and it is the only reason they leave the trees for the ground. Well, have you ever tried doing a Number 2 in a tree? Sloths can lose up to a third of their body weight by going to the toilet.",
	"If your sausage and bacon breakfast is taking a little longer than usual to move its way down your tummy, spare a thought for the poor sloth – it takes him 30 days to digest just one leaf.",
	"FACT: Sloths are cute. An obvious fact, but a fact nonetheless.",
	"OSsloth This OSsloth is OSsloth what OSsloth a OSsloth sloth OSsloth looks OSsloth like OSsloth",
	"Sloths can be cut http://bit.ly/2oNSY2v"
];

var magic8Ball = [
	"It is certain",
	"It is decidedly so",
	"Without a doubt",
	"You may rely on it",
	"As I see it, yes",
	"Most likely",
	"Outlook good",
	"Yes",
	"Signs point to yes",
	"Reply hazy try again",
	"Ask again later",
	"Better not tell you now",
	"Cannot predict now",
	"Concentrate and ask again",
	"Don't count on it",
	"My reply is no",
	"My sources say no",
	"Outlook not so good",
	"Very doubtful"
];

module.exports = {

	jokes: jokes,
	slothFacts: slothFacts,
	magic8Ball: magic8Ball,

	season: 4,	
	timeout: 60 * 5, // 5 minutes
	jokeDelayTime: 1000 * 10, // 10 seconds

}