import index from './routes/index';
import stats from './routes/stats';
import random from './routes/random';
import badRequest from './routes/badRequest';
import utils from './utils.js';

export default function(app) {
	utils.loadConfigIntoGlobal();

	app.use('/', index);
	app.use('/stats', stats);
	app.use('/random', random);
	app.use('*', badRequest);
}
