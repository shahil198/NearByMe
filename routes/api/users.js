const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

// Importing User Model
const User = require('../../models/User');

// @route  GET api/users
// @desc   Get all users
// @access Public
router.get('/', async (req, res) => {
    try {
      const users = await User.find();
      res.json({success: true, users, count: users.length});
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
});

// @route  POST api/users
// @desc   Register User
// @access Public
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please input a valid email').isEmail(),
    check(
      'password',
      'Please enter a password of minimum 6 characters'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, phone, age, address, pincode, aadhar_no, occupation, gender } = req.body;

    try {
      // See if user exists
      let user = await User.findOne({ email });
      if (user) { 
        return res
          .status(400)
          .json({ success:false, error:'User already exits'});
      }

      user = new User({
        name,
        email,
        password,
        phone,
        age,
        address,
        pincode,
        aadhar_no,
        occupation,
        gender,
      });

      // Encrpyt password

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      // Return jsonwebtoken
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ success:true, token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;