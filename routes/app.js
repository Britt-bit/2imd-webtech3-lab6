const express = require('express');
const router = express.Router();
const controller = require('../controllers/app');

router.get('/', controller.getAll);
router.put('/updateStats/:country', controller.update);

module.exports = router;