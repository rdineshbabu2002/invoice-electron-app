const Bill = require("../models/billModel");
const catchAsync = require("../utils/catchAsync");
const xlsx = require("xlsx");

const getAllBills = catchAsync(async (req, res) => {
  const allBills = await Bill.find({}).sort({ date: -1 });

  res.status(200).json({
    status: "success",
    data: allBills,
  });
});

const createBill = catchAsync(async (req, res) => {
  const newBill = await Bill.create(req.body);
  res.status(200).json({
    status: "success",
    data: newBill,
  });
});

const getSingleBill = catchAsync(async (req, res) => {
  const singleBill = await Bill.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: singleBill,
  });
});

const deleteBill = catchAsync(async (req, res) => {
  const deletedBill = await Bill.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: "success",
  });
});

const getBillByInvoiceNo = catchAsync(async (req, res, excelParsedValues) => {
  excelParsedValues = excelParsedValues[0];
  const existingBill = await Bill.findOne({
    "formDetails.invoice": `${excelParsedValues["Doc No"]}`,
  });

  console.log("excelParsedValues", excelParsedValues);

  console.log("existingBill", existingBill);

  existingBill["irn"] = excelParsedValues["IRN"];
  existingBill["ackNo"] = excelParsedValues["Ack No"];
  existingBill["ackDate"] = excelParsedValues["Ack Date"];
  existingBill["qrcode"] = excelParsedValues["Signed QR Code"];
  existingBill["status"] = "success";

  await existingBill.save();
  res.json({ success: true, data: existingBill });
});

const uploadJson = catchAsync(async (req, res) => {
  const fileBuffer = req.file.buffer;
  const workbook = xlsx.read(fileBuffer, { type: "buffer" });
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = xlsx.utils.sheet_to_json(sheet);

  let allBillsFound = true;

  if (data) {
    return getBillByInvoiceNo(req, res, data);
  }

  if (allBillsFound) {
    res.json({ success: true, data });
  } else {
    res.status(404).json({ success: false, error: "Bill not found" });
  }
});

module.exports = {
  getAllBills,
  createBill,
  getSingleBill,
  deleteBill,
  uploadJson,
};
