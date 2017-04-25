var test = require('tape');
var stats = require('../app/stats/processStats.js');
const user = require('./testUser.json');
  

test('processStats.getSkillRating(user)', function (t) {
	const expectedSkillRating = '2531 [Platinum]';
	t.plan(2);
	t.equal(typeof stats.getSkillRating, 'function', 'stats.getSkillRating should be a function');
	var skillRating = stats.getSkillRating(user);
    t.equal(skillRating, expectedSkillRating);
});

test('processStats.getWinLossTie(user)', function (t) {
	const expectedWinLosstie = '23-23-1';
	t.plan(2);
	t.equal(typeof stats.getWinLossTie, 'function', 'stats.getWinLossTie should be a function');
	var winLossTie = stats.getWinLossTie(user);
	t.equal(winLossTie, expectedWinLosstie);
});

test('processStats.topHeroes(user)', function (t) {
	const expectedTopHeroes = '  (1) Mercy: 3 hours  (2) Lúcio: 1 hour  (3) Ana: 1 hour';
	t.plan(2);
	t.equal(typeof stats.topHeroes, 'function', 'stats.topHeroes should be a function');
	var topHeroes = stats.topHeroes(user);
	t.equal(topHeroes, expectedTopHeroes);
});

test('processStats.getLeastPlayedHero(user)', function (t) {
	const expectedLeastPlayedHero = 'Sombra';
	t.plan(2);
	t.equal(typeof stats.getLeastPlayedHero, 'function', 'stats.getLeastPlayedHero should be a function');
	var leastPlayedHero = stats.getLeastPlayedHero(user);
	t.equal(leastPlayedHero, expectedLeastPlayedHero);
});