module.exports = (req, res) =>{
  if(req.session.userId){
  res.render("create",{
  createPost: true
  });
  }
  //res.redirect('/auth/login')
  res.redirect("/posts/new")
 }
