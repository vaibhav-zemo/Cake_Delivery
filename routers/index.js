const express = require('express');
const router = express.Router();
const indexController = require('../controller/index');

router.get('/',indexController.home);
router.get('/menu',indexController.menu);

module.exports = router;