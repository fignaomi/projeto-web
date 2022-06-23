function adminAuth(req, res, next){
   if(req.session.autorizado == true){
    
       next();
   }else{
       res.redirect("/login");
   }
}

module.exports = adminAuth