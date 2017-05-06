const express = require('express');
const router = express.Router();

import random from '../random/random';

router.get('/:action', (req, res) => {
	const action = req.params.action;
	const param1 = req.query.param1;
	const headers = req.headers;
	var message = random(action, headers, param1);
	res.send(message);
});

export default router;