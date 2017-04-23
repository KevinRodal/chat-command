import index from './routes/index';



export default function(app) {
	app.use('/', index);
}
