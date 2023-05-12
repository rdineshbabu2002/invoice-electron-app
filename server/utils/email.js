const nodemailer = require("nodemailer");

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.name = user.name;
    this.from = "Sakthi Murugan Rice Mill <" + process.env.EMAIL_USERNAME + ">";
  }
  newTransport() {
    return nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      port: 587,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async send(html) {
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject: "Bill Confirmation",
      html: html,
    };
    await this.newTransport().sendMail(mailOptions);
  }
};
