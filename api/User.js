const express = require("express");

const router = express.Router();

// mongoDB user model
const User = require("../models/User");

// Password handler
const bcrypt = require("bcrypt");

// Sign up
router.post("/signup", (req, res) => {
  /*
    Here I'll be using the async/await syntax, which is considered as modern
    JavaScript and more readable than the prior .then() syntax.
  */
  (async () => {
    let { name, email, password, dateOfBirth } = getTrimmedRequest(req.body);

    if (!name || !email || !password || !dateOfBirth) {
      res.status(400).send("Empty input field!");
      // When we do a return inside an if statement, we don't need to use else because the function will end here.
      return;
    }

    if (isInvalidName(name)) {
      res.status(400).send("Invalid name");
      return;
    }

    if (isInvalidEmail(email)) {
      res.status(400).send("Invalid email");
      return;
    }

    if (isInvalidDateOfBirth(dateOfBirth)) {
      res.status(400).send("Invalid date of birth");
      return;
    }

    if (password.length < 8) {
      res.status(400).send("Password is too short!");
      return;
    }

    // For catching errors we can use a try-catch when using the async/await syntax.
    try {
      const user = await User.find({ email });

      if (user.length) {
        // 409 HTTP STATUS CODE = Conflict
        res.status(409).send("User with the provided email already exists");
        return;
      }

      // Try to create new user

      // Password handling
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const newUser = new User({
        name,
        email,
        password: hashedPassword,
        dateOfBirth,
      });

      const result = await newUser.save();
      res.status(200).send(result);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  })();
});

const getTrimmedRequest = (requestBody) => {
  return {
    /*
      I'm using optional chaining here, without them I woudl get an error if any of the request parameters were not defined.
    */
    name: requestBody?.name?.trim(),
    email: requestBody?.email?.trim(),
    password: requestBody?.password?.trim(),
    dateOfBirth: requestBody?.dateOfBirth?.trim(),
  };
};

// These functions could probably be moved to some utils.js file.
const isInvalidName = (name) => !/^[a-zA-Z ]*$/.test(name);

/*
  There were some valid emails that would be invalid according to the prior
  regex statement. Some special characters are allowed, dot, underscore,
  percent sign, plus sign and hyphen.
*/
const isInvalidEmail = (email) =>
  !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

const isInvalidDateOfBirth = (dateOfBirth) => !new Date(dateOfBirth).getTime();

/*
  You can try to wrap this endpoint in async/await syntax yourself.
*/

// Sign in
router.post("/signin", (req, res) => {
  let { email, password } = req.body;
  email = email.trim();
  password = password.trim();

  if (email == "" || password == "") {
    res.json({
      status: "FAILED",
      message: "Empty credentials supplied",
    });
  } else {
    // Check if user exist
    User.find({ email })
      .then((data) => {
        if (data.length) {
          // User exists

          const hashedPassword = data[0].password;
          bcrypt
            .compare(password, hashedPassword)
            .then((result) => {
              if (result) {
                // Password match
                res.json({
                  status: "SUCCESS",
                  message: "Sign in successful",
                  data: data,
                });
              } else {
                res.json({
                  status: "FAILED",
                  message: "Invalid password entered",
                });
              }
            })
            .catch((err) => {
              res.json({
                status: "FAILED",
                message: "An error occurred while comparing passwords",
              });
            });
        } else {
          res.json({
            status: "FAILED",
            message: "Invalid credentials entered!",
          });
        }
      })
      .catch((err) => {
        res.json({
          status: "FAILED",
          message: "An error occurred while checking for existing user",
        });
      });
  }
});

module.exports = router;
