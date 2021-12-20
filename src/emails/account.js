const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// sgMail.send();

// sgMail
//   .send({
//     to: "hoangquoclk003@gmail.com",
//     from: "hoangquoclk003@gmail.com",
//     subject: "this is my first creation",
//     text: "I hope this one actually get to you.",
//   })
//   .then(() => {
//     console.log("Email sent");
//   })
//   .catch((error) => {
//     console.error(error);
//   });

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "hoangquoclk003@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "hoangquoclk003@gmail.com",
    subject: "this is my first creation",
    text: `Goodbye, ${name}. I hope to see you back sometime soon.`,
  });
};

module.exports = { sendWelcomeEmail, sendCancelationEmail };
