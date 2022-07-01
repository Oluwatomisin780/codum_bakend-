const bcrypt = require('bcryptjs');
const User = require('../models/auth');
exports.signup = (req, res, next) => {
  const email = reaq.body.email;
  const name = req.body.name;
  const password = req.body.password;
  bcrypt.hash(password, 12).then((encryptPassword) => {
    const user = new User({
      email: email,
      name: name,
      password: encryptPassword,
    });
    return user
      .save()
      .then((result) => {
        res.status(200).json({
          message: 'user signed up',
          result: result._id,
        });
      })
      .catch((err) => {
        console.log(error);
      });
  });
};

exports.login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
};
