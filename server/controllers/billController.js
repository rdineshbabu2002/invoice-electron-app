const Bill = require("../models/billModel");
const catchAsync = require("../utils/catchAsync");
const Email = require("../utils/email");

const getAllBills = catchAsync(async (req, res) => {
  const allBills = await Bill.find({}).sort({ date: -1 });

  res.status(200).json({
    status: "success",
    data: {
      bills: [...allBills],
    },
  });
});

const createBill = catchAsync(async (req, res) => {
  const newBill = await Bill.create(req.body);
  res.status(200).json({
    status: "success",
    data: { ...newBill },
  });
});

const getSingleBill = catchAsync(async (req, res) => {
  const singleBill = await Bill.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: { ...singleBill },
  });
});

const deleteBill = catchAsync(async (req, res) => {
  const deletedBill = await Bill.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: "success",
  });
});

const sendMail = catchAsync(async (req, res) => {
  console.log(req.body);
  let user = {
    email: req.body.email,
    name: req.body.name,
    template: req.body.template,
    link: req.body.link,
    vehicleNo: req.body.vehicleNo,
    invoiceNo: req.body.invoiceNo,
    to: req.body.to,
    totalAmount: req.body.totalAmount,
    amountInWords: req.body.amountInWords,
  };

  let template = `<html><style>
  .heading{
    color:#37b24d;
  }
  
  .align-center{
    text-align:center;
  }
  </style>
  
  <h1 class="heading align-center">Sakthi Murugan Rice Mill</h1>
  <h3 class="align-center">Invoice Generated</h3>
  <p>Invoice No : ${user.invoiceNo}</p>
  <p>To : ${user.name}</p>
  <p>Vehicle No : ${user.vehicleNo}</p>
  <p>Total Amouunt : ₹ ${user.totalAmount}/-</p>
  <p>Amount in Words : ${user.amountInWords}</p>
  <p><a href="${user.link}" target="_blank">Click here</a> to pay online</p></html>
  
  `;

  await new Email(user).send(template);

  res.status(200).json({
    status: "success",
    message: "Mail sent successfully",
  });
});

module.exports = {
  getAllBills,
  createBill,
  getSingleBill,
  deleteBill,
  sendMail,
};
