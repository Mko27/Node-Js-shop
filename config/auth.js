module.exports = {

  ensureAuthenticated: function (req, res, next) {
    console.log('ensure')
    console.log(req.isAuthenticated())
    if (req.isAuthenticated()) {
      return next()
    }
    console.log('Please log in to view that resource')
    res.redirect('/users')
  },

  forwardAuthenticated: function (req, res, next) {
    console.log('forward')
    console.log(req.isAuthenticated())
    if (!req.isAuthenticated()) {
      return next()
    }
    res.redirect('/users/home')
  }
}
