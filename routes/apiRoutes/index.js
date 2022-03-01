// import express
const express = require('express');
// imports router
const router = express.Router();

// sets API routes
router.use(require('./candidateRoutes'));
router.use(require('./partyRoutes'));

// exports router module
module.exports = router;