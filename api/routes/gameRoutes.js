const express = require('express');

const router = express.Router();
const gameController = require('../controllers/gameController');

router.get('/games', gameController.getAllGames);
router.get('/games/:id', gameController.getGameById);
router.post('/games', gameController.createGame);
router.put('/games/:id', gameController.updateGame);

module.exports = router;