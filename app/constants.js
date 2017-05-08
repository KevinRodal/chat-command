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
	composeJoke('What did Zenyatta say when Tracer asked if he had something in his eye?', 'Yes, it\'s in the iris.'),
	composeJoke('Tracer, D.Va and Mei walk into a bar.', 'Only Mei walks out...'),
	composeJoke('What\'s a more appropriate name for Ana\'s ultimate?', 'Nanaboost!'),
	composeJoke('Why didn\'t Zarya get in front of the rest of her team?', 'She was Russian, and everyone else was Stalin.'),
	composeJoke('Why is capture the flag Mccree\'s favorite game mode?', 'Because every round ends in a draw.'),
	composeJoke('What do you call a Mercy that only pockets a Roadhog?', 'A Hogpocket :D'),
	composeJoke('How did Widowmaker describe an assassination in Mexico?', 'Juan shot, Juan kill.'),
	composeJoke('Why did McCree invite Reinhardt to his birthday party?', 'He was a fan of hammers.'),
	composeJoke('Why is Lúcio not aloud in the produce section?', 'He always drops the beets.'),
	composeJoke('Reinhardt, Roadhog, and Winston walk into a bar.', 'Torbjorn walks under it.'),
	composeJoke('Do you think Zarya\'s hair color natural?', 'Of course it is, heroes never dye!'),
	composeJoke('What did everyone think about Reinhardt\'s ult?', 'The enemy team didn\'t like it, but the ground was cracking up.'),
	composeJoke('Why doesn\'t Junkrat eat Taco Bell?', 'Too much fire in the hole.'),
	composeJoke('Why isn\'t Widow maker talking to Torbjorn?', 'They just don\'t see thigh to eye.'),
	composeJoke('How come Soldier: 76 understands Bastion?', 'Bastion uses Morris\' code.'),
	composeJoke('Why was Winston disappointed when Ana used her ultimate on him?', 'He thought she said "nanner boost"'),
	composeJoke('Why didn\t Zenyatta help capture the objective?', 'He didn\'t have the balls!'),
	composeJoke('I think I have a really good Overwatch themed joke for you!', 'Orisa bad one?'),
	composeJoke('What did Soldier 76 say when a seagull pooped on his hand?', 'Not on my watch...'),
	composeJoke('Why is Zenyatta afraid of Ribbit Lúcio?', "Once, he dreamt he was a butterfly."),
	composeJoke('Why didn\'t Zarya capture the objective?', 'She was Putin it off. PogChamp'),
	composeJoke('How do you stop a charging Reinhardt?', 'Take away his credit card.'),
	composeJoke('What happens when you press "shift" as Genji on Ecopoint: Antarctica?', 'He\'ll be dashing through the snow! KappaClaus'),
	composeJoke('Why didn\'t Tracer use her blinkers while she was turning the corner at an intersection?', 'Blink was on cooldown.'),
	composeJoke('Why do none of the girls like Roadhog?', 'They think he\'s a pig BibleThump I\'ll show myself out'),
	composeJoke('Why couldn\'t McCree hit the rocketeer?', 'She was to Pharah away!'),
	composeJoke('What happened to Zenyatta on 4/20?', 'He experienced dank-quility.'),
	composeJoke('What happened to Zenyatta on 4/20?', 'He passes into the high-res.'),
	composeJoke('If Hanzo shoots an arrow in the forest and no one is around...', '...does he still miss? BrokeBack'),
	composeJoke('What kind of ceremonies does Reaper enjoy?', 'Shotgun weddings!'),
	composeJoke('What elementary study does Hanzo teach on Tuesdays?', 'Simple geometry.'),
	composeJoke('Why is Reinhardt not a salesman anymore?', 'He always charged too much.')
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

var heroes = [
	'Zarya',
	'Roadhog',
	'Ana',
	'Mercy',
	'Reinhardt',
	'Lúcio',
	'Zenyatta',
	'Mei',
	'D.Va',
	'Winston',
	'Junkrat',
	'Hanzo',
	'Reaper',
	'Genji',
	'Soldier: 76',
	'Tracer',
	'Torbjörn',
	'Pharah',
	'Symmetra',
	'McCree',
	'Widowmaker',
	'Orisa',
	'Bastion',
	'Sombra'
];

var seagullMessages = [
	/* !bastion */ "My favorite character is Bastion. I am learning Binary to play Overwatch on PC with no subtitles, and one day I will move to Silicon Valley to become a PC, so that everyone may play Overwatch on me. Wish me luck in Silicon Valley!",
	/* !bird */ "My favorite character is Bastion's Bird. I am learning Flappy Bird to play Overwatch on my phone, one day I will glue feathers on my skin and perch on my washing machine. Then I will become an actual bird. Wish me luck! Tweet Tweet, Beep Boop!",
	/* !genji */ "My favorite character is Genji. I am learning Japanese to play Overwatch in Japanese with no subtitles, and one day I will move to Japan to become a pro gamer. Wish me luck in Japan!",
	/* !hanzo */ "PogChamp 竜が我が敵を喰らう PogChamp RYUU GA WAGA TEKI WO KURAU PogChamp",
	/* !lucio */ "TriHard OH TriHard LETS TriHard BREAK TriHard IT TriHard DOWN TriHard",
	/* !mei */ "PanicVis 冻住，不许走！ PanicVis Dòng PanicVis zhù PanicVis bùxǔ PanicVis zǒu! PanicVis",
	/* !tire */ "My favourite character is @tire. One day I will change my skin into rubber, eat explosives and roll towards my enemies with a cry of wrath and edgy spikes. Wish me luck!",
	/* !torbjorn */ "My favorite character is Torguebarn. I am learning Norwegian to play Overwatch on PC with no subtitles, and one day I will move to Copenhagen to become a Swedish dwarf like Torbborn Wish me luck in Oslo! AARDWAARK;",
	/* !tracer */ "My least favorite character is Tracer. I am currently learning foreign languages to spread my book of Tracism to riot Blizzard HQ, so i can play Overwatch on PC with no Tracer. One day i will take a trip around the globe to flush out the world of remaining Tracers. Wish me luck!"
];

module.exports = {

	jokes: jokes,
	slothFacts: slothFacts,
	magic8Ball: magic8Ball,
	heroes: heroes,
	seagullMessages: seagullMessages,

	season: 4,	
	timeout: 60 * 5, // 5 minutes
	jokeDelayTime: 1000 * 10, // 10 seconds

}