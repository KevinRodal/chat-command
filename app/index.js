import index from './routes/index';
import stats from './routes/stats';
import badRequest from './routes/badRequest';

export default function(app) {
	app.use('/', index);
	app.use('/stats', stats);
	app.use('*', badRequest);
}
