//the functions that will be executed upon get and post calls from routes
const nodemailer = require("nodemailer");

module.exports.index_get = (req,res) => {
    res.render("index");
}

module.exports.index_post = (req,res) => {
    res.send("new request for index");
}

module.exports.content_get = (req,res) => {
    res.render("content")
}

module.exports.forgotpass_get = (req,res) => {
    res.render("forgotpass")
}


// Nodemailer Routing
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });

module.exports.forgotpass_post = (req,res) => {
    const {data} = req.body; //somehow use this as a paramter key for url

    let mailOptions = {
        from: process.env.MAIL_USERNAME,
        to: process.env.MAIL_USERNAME,
        subject: 'Nodemailer Project',
        text: `Your email is: ${data}`
      };
    
      
    
      transporter.sendMail(mailOptions, function(err, info) {
        if (err) {
          console.log(err);
        } else {
          console.log("Email sent successfully" + info.messageId);
        }
      });

    //console.log(data);
}