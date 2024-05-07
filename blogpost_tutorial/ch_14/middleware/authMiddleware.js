const User = require("../models/user")

module.exports = async (req, res, next) => {
  try {
    const user = await user.findById(req.session.userId);
    if (!user) {
      return res.redirect("/")
    }
    next()
  } catch (error) {
    console.error("Error finding user:", error)
    res.status(500).send("Interval server error")
  }
}