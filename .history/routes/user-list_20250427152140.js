const express = require('express');
const router = express.Router();
const UserList = require('../models/');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); 
const verifyToken = require('../auth');


module.exports = router;