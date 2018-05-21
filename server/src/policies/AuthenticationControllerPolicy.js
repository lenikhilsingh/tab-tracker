// middleware which is going to validate whether certain data cobstarinsts pass
// or fail
// included the joi framework, which has methods to validate emails and passwords

const Joi = require("joi");

module.exports = {
  register(req, res, next) {
    const schema = {
      // email's gonna be required as a string , and also a valid email
      emailid: Joi.string().email(),
      // regular expression  atleast 8-32 characters long
      // password should match this regex expression
      password: Joi.string().regex(new RegExp("^[a-zA-Z0-9]{8,32}$"))
    };

    // now that we have the schema defined now we actually use it
    const { error } = Joi.validate(req.body, schema);

    // console.log("ran till here");
    if (error) {
      switch (error.details[0].context.key) {
        // if email error, pass this message
        case "email":
          // console.log("emailid invalid");
          res.status(400).send({
            error: "You must provide a valid email address"
          });
          break;
        case "password":
          // if password error pass this message
          res.status(400).send({
            error: `The password provided failed to match the following rules:
              <br>
              1. It must contain ONLY the following characters: lower case, upper case, numerics.
              <br>
              2. It must be at least 8 characters in length and not greater than 32 characters in length.
            `
          });
          break;
        default:
          res.status(400).send({
            error: "Invalid registration information"
          });
      }
    } else {
      next();
    }
  }
};
