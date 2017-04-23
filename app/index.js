import index from './routes/index';
import badRequest from './routes/badRequest';


export default function(app) {
	app.use('/', index);
	app.use('*', badRequest);
}
