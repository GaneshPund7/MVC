const express = require('express');
const {  addUsers, getUsers, updateUsers, deleteUsers } = require('../Controller/user');
const { verifyUser } = require('../Controller/userlogin');
const router = express.Router();

// user Controller
// router.get('/', getUsers);
router.route('/').post(addUsers).get(getUsers);

router.route('/:id').put(updateUsers).delete(deleteUsers)

// Login Router 
router.route('/login').post(verifyUser);

module.exports = router;