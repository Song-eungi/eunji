const express = require('express');
const router = express.Router();
const controller = require('../controllers/board');

router.post('/add/board', controller.add.board);
router.post('/get/board', controller.get.board);
router.post('/get/board_cnt', controller.get.board_cnt);

router.post('/get/board_data', controller.get.board_data);
router.post('/update/view_cnt', controller.update.view_cnt);

//
router.post('/delete/board', controller.delete.board);



module.exports = router;