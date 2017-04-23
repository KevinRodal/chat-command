import index from './routes/index';
import stats from './routes/stats';
import random from './routes/random';
import badRequest from './routes/badRequest';

export default function(app) {
	app.use('/', index);
	app.use('/stats', stats);
	app.use('/random', random);
	app.use('*', badRequest);
}
