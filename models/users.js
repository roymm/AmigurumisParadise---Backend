const mongoose = require("mongoose");

function validateEmail(email) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
}

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  last_name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    validate: [validateEmail, "Invalid email address"]
  },

  password: {
    type: String,
    required: true,
    select: false
  }
}, {timestamps: true});

module.exports = mongoose.model("User", userSchema);
