module.exports.signup_get = (req,res) => {
    res.render("signup")
}
module.exports.signup_post = (req,res) => {
    res.send("new signup")
}

module.exports.login_get = (req,res) => {
    res.render("login")
}
module.exports.login_post = (req,res) => {
    res.send("new login")
}

module.exports.newpass_get = (req,res) => {
    res.render("newpass")
}
module.exports.newpass_post = (req,res) => {
    res.render("new pass request")
}