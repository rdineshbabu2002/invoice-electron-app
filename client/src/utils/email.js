const nodemailer = require("nodemailer");

module.exports = class Email {
  constructor(user) {
    this.to = "rdineshbabu2002@gmail.com";
    this.firstName = "Dineshbabu";
    this.url = "hello";
    this.from = process.env.FROM;
  }

  newTransport() {
    console.log(process.env.FROM);
    return nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.FROM,
        pass: process.env.PASSWORD,
      },
    });
  }

  // Send the actual email
  async send(template, subject) {
    // 2) Define email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html: `<html><head><style>
      .bill-page {
        width: 210mm;
        height: 296mm;
        background-color: #fff;
        margin: 1rem;
      }
      
      .bill-title-container {
        font-family: "PoppinsBold";
      }
      
      .bill-title {
        margin-top: 2rem;
        color: #2f9e44;
      }
      
      .invoice-title {
        font-family: "PoppinsLight";
        color: #888;
      }
      
      .bill-details-container {
        margin-top: 1.5rem;
        display: flex;
        gap: 2rem;
        position: relative;
      }
      
      .bill-date {
        margin-right: 3rem;
        float: right;
        font-size: 14px;
      }
      .bill-date-name {
        color: #888;
      }
      
      .bill-logo-container {
        margin-left: 3rem;
      }
      
      .bill-company-logo {
        width: 160px;
      }
      
      .bill-bill-from-title {
        color: #888;
      }
      
      .bill-bill-address-container {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
      
      .bill-from-name {
        color: #40c057;
      }
      
      .bill-from-address {
        font-size: 14px;
        color: #333;
      }
      
      .bill-form-gstno {
        font-size: 14px;
        color: #333;
      }
      
      .bos-title {
        margin-top: 1.2rem;
        color: #2f9e44;
        font-family: "PoppinsBold";
      }
      
      .bill-table-container {
        margin: 0 3rem;
        width: 700px;
        height: 425px;
        position: relative;
      }
      
      .bill-table-header {
        background-color: #40c057;
        color: #fff;
        font-size: 14px;
      }
      
      .bill-table-header-title {
        padding: 0.8rem 0.5rem;
      }
      
      .prod-des {
        width: 300px;
      }
      
      .bill-table-header-title.hsn-acs {
        width: 70px;
        padding: 0;
      }
      
      .bill-table-header-title.bags {
        width: 70px;
      }
      
      .bill-table-header-title.qty {
        width: 80px;
      }
      .bill-table-header-title.rate {
        width: 80px;
      }
      .bill-table-header-title.amount {
        width: 100px;
      }
      
      .bill-table-body {
        font-size: 14px;
        padding: 0.6rem 0;
        text-align: center;
      }
      
      .bill-table-total {
        font-size: 14px;
      }
      
      .bill-table-final-row {
        font-size: 14px;
        padding: 0.6rem 0;
        text-align: center;
      
        position: absolute;
        bottom: 0;
        left: 0; /* optional: align the row to the left edge of the container */
        width: 100%;
      }
      
      .bill-amt-in-wrds-title {
        color: #888;
      }
      
      .bill-amt-in-wrds {
        margin: 0.2rem 3rem 0.5rem 3rem;
        font-size: 14px;
        font-family: "PoppinsMedium";
      }
      
      .bill-contacts-fssi-container {
        margin: 0 3rem;
        display: flex;
        justify-content: space-between;
      }
      
      .bill-contacts-container {
        width: 300px;
        height: 110px;
        border: 1px solid #8ce994;
        padding: 1rem;
      }
      
      .bill-icons {
        width: 20px;
      }
      
      .bill-pno-container {
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
      
      .bill-owners-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      
      .bill-title-container {
        color: #40c057;
      }
      
      .fssi {
        font-style: italic;
        margin-top: 0.5rem;
      }
      
      .bill-bank-sign-container {
        margin: 1rem 3rem;
        display: flex;
        justify-content: space-between;
      }
      .bill-bank-details-container {
        padding: 1rem;
        width: 300px;
        height: 160px;
        border: 1px solid #8ce994;
      }
      
      .bill-title-bank-title {
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        color: #2f9e44;
      }
      
      .bill-bank-details {
        font-size: 14px;
      }
      
      .bill-sign-container {
        color: #2f9e44;
        position: relative;
      }
      
      .bill-auth-sign-container {
        position: absolute;
        bottom: 25px;
        left: 67px;
      }
      
      .bill-eoe {
        position: absolute;
        bottom: 0;
        right: 20px;
      }
      
      .bill-total-amt {
        font-size: 20px;
      }
      
      .printing-area {
        margin-right: 3rem;
      }
      
      .bill-button {
        margin: 1rem 0 0 2rem;
        padding: 0.4rem 0.8rem;
        background-color: #40c057;
        color: #fff;
        border: none;
        border-radius: 0.2rem;
        cursor: pointer;
      }
      
      .bw-print {
        filter: grayscale(100%);
      }
      

      </style>
      <head>
      <body>
      <h1 class="heading">${"Hello Class"}</h1><h2>hello</h2></body></html>`,
      // text: htmlToText.fromString(html),
    };

    // 3) Create a transport and send email
    await this.newTransport().sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
        // res.status(200).json((data = `Email Sent :+ ${info.response}`));
      }
    });
  }

  async sendWelcome() {
    await this.send("welcome", "Welcome to the Sakthi Murugan Rice Mill !!");
  }
};
