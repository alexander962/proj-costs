const express = require('express');
const router = express.Router();

const {
  getAllCosts,
  createNewCost,
  changeCost,
  deleteCost
} = require('../controllers/task.controllers');

router.get('/allCosts', getAllCosts);
router.post('/createCost', createNewCost);
router.patch('/changeCost', changeCost);
router.delete('/deleteCost', deleteCost);

module.exports = router;