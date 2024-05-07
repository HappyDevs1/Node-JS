const bcrypt = require("bcrypt");
const User = require("../models/user");

// module.exports = (req, res) => {
//   const { username, password } = req.body;

//   User.findOne({ username: username })
//     .then(user => {
//       if (user) {
//         bcrypt.compare(password, user.password)
//           .then(same => {
//             if (same) { // if passwords match
//               // store user session, will talk about it later
//               res.redirect('/');
//             } else {
//               res.redirect('/auth/login');
//             }
//           })
//           .catch(error => {
//             console.error("Error comparing passwords:", error);
//             res.redirect('/auth/login');
//           });
//       } else {
//         res.redirect('/auth/login');
//       }
//     })
//     .catch(error => {
//       console.error("Error finding user:", error);
//       res.redirect('/auth/login');
//     });
// };

module.exports = async (req, res) => {
  try {
    const {username, password} = req.body
    const user = await User.findOne({ username: username})

    if (user) {
      const same = await bcrypt.compare(password, user.password)
      if (same) {
        req.session.userId = user.id
        res.redirect("/")
      } else {
        res.redirect("/auth/login")
      }
    } else {
      res.redirect("/auth/login")
    }
  } catch (error) {
    console.log("Error authicating user:", error)
    res.status(500).send("Internal server error")
  }
}