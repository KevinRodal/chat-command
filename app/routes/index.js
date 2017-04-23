const express = require('express');
const router = express.Router();
import { name, description, version, homepage } from '../../package.json';

router.get('/', (req, res) => {

	const json = {
		name, description, version, homepage
	};
	res.json(json);
});

export default router;