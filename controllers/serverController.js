//the functions that will be executed upon get and post calls from routes
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const User = require("../models/User");

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
    const {data} = req.body;
    const dataJSON = {email: data};

    User.findOne(dataJSON, function(error, result) {
      if (error) {
        console.log(error);
      } else {
        // process result
        console.log(result);
      }
    });

    let mailOptions = {
        from: process.env.MAIL_USERNAME,
        to: process.env.MAIL_USERNAME,
        subject: 'LL Security - Password reset verification',
        text: `A password reset request has been sent. If this was you, please forward yourself to this link to continue: http://localhost/newpass?email=${data}`
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

module.exports.newpass_get = (req,res) => {
  res.render("newpass")
}
module.exports.newpass_post = (req,res) => {
  const {newPassData} = req.body;

  console.log(newPassData);

  // User.findOne(dataJSON, function(error, result) {
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     // process result
  //     console.log(result);
  //   }
  // });
}