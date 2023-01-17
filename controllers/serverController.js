//the functions that will be executed upon get and post calls from routes
module.exports.index_get = (req,res) => {
    res.render("index");
}

module.exports.index_post = (req,res) => {
    res.send("new request for index");
}

module.exports.signup_get = (req,res) => {
    res.render("signup")
}

module.exports.login_get = (req,res) => {
    res.render("login")
}

module.exports.newpass_get = (req,res) => {
    res.render("newpass")
}