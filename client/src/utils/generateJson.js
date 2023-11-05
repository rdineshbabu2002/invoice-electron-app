const { replaceDotsWithSlashes } = require("./helperFunctions");

let data = {
  Version: "1.1",
  TranDtls: {
    TaxSch: "GST",
    SupTyp: "B2B",
    IgstOnIntra: "N",
    RegRev: "N",
    EcmGstin: null,
  },
  DocDtls: {
    Typ: "INV",
    No: "395",
    Dt: "17/10/2023",
  },
  SellerDtls: {
    Gstin: "33ABMFS6116L1ZV",
    LglNm: "SAKTHI MURUGAN RICE MILL",
    Addr1: "280,Pasur Road,Elumathur",
    Addr2: null,
    Loc: "Elumathur",
    Pin: 638104,
    Stcd: "33",
    Ph: "9994574429",
    Em: null,
  },
  BuyerDtls: {
    Gstin: "33BPNPK8419L1ZD",
    LglNm: "SAKTHI TRADERS",
    Addr1:
      "368-D, NA, NATESHAN NAGAR, TRICHY ROAD, VELLAKOVIL,KANGEYAM TALUK, Tiruppur, Tamil Nadu, 638111",
    Addr2: null,
    Loc: "Tiruppur",
    Pin: 638111,
    Pos: "33",
    Stcd: "33",
    Ph: null,
    Em: null,
  },
  ValDtls: {
    AssVal: 40710,
    IgstVal: 0,
    CgstVal: 1017.75,
    SgstVal: 1017.75,
    CesVal: 0,
    StCesVal: 0,
    Discount: 0,
    OthChrg: 0,
    RndOffAmt: 0,
    TotInvVal: 42745.5,
  },
  EwbDtls: {
    TransId: null,
    TransName: null,
    TransMode: "1",
    Distance: 35,
    TransDocNo: null,
    TransDocDt: "17/10/2023",
    VehNo: "TN34V8399",
    VehType: "R",
  },
  RefDtls: {
    InvRm: "NICGEPP2.0",
  },
  ItemList: [
    {
      SlNo: "1",
      PrdDesc: "BRAN",
      IsServc: "N",
      HsnCd: "23022020",
      Qty: 3450,
      FreeQty: 0,
      Unit: "KGS",
      UnitPrice: 11.8,
      TotAmt: 40710,
      Discount: 0,
      PreTaxVal: 0,
      AssAmt: 40710,
      GstRt: 5,
      IgstAmt: 0,
      CgstAmt: 1017.75,
      SgstAmt: 1017.75,
      CesRt: 0,
      CesAmt: 0,
      CesNonAdvlAmt: 0,
      StateCesRt: 0,
      StateCesAmt: 0,
      StateCesNonAdvlAmt: 0,
      OthChrg: 0,
      TotItemVal: 42745.5,
    },
  ],
};
function generateJson(bill) {
  // invoice details
  data["DocDtls"]["No"] = bill["formDetails"]["invoice"]; // invoice number
  data["DocDtls"]["Dt"] = replaceDotsWithSlashes(bill["formDetails"]["date"]); // invoice date

  // Buyer Details
  data["BuyerDtls"]["LglNm"] = bill["formDetails"]["name"]; // name
  data["BuyerDtls"]["Gstin"] = bill["formDetails"]["gstin"]; // gstin
  data["BuyerDtls"]["Addr1"] = bill["formDetails"]["address"]; // address
  data["BuyerDtls"]["Loc"] = bill["formDetails"]["location"]; // location
  data["BuyerDtls"]["Pin"] = bill["formDetails"]["pincode"]; // pincode

  // E way Bill Details
  data["EwbDtls"]["Distance"] = bill["formDetails"]["distance"];
  data["EwbDtls"]["VehNo"] = bill["formDetails"]["vehicleNo"];
  data["EwbDtls"]["TransDocDt"] = replaceDotsWithSlashes(
    bill["formDetails"]["date"]
  );

  // total value details
  data["ValDtls"]["AssVal"] = bill["tableTotalValues"]["amount"]; //total value without tax
  data["ValDtls"]["CgstVal"] = bill["tableTotalValues"]["gst"]; // cgst value
  data["ValDtls"]["SgstVal"] = bill["tableTotalValues"]["gst"]; // sgst value
  data["ValDtls"]["TotInvVal"] = parseInt(
    bill["tableTotalValues"]["totalAmount"]
  ); // total value with tax

  // item details
  let temp = [];
  let tableValues = bill["tableValues"];

  tableValues.forEach((billItem, index) => {
    let bluePrint = {
      SlNo: "1",
      PrdDesc: "BRAN",
      IsServc: "N",
      HsnCd: "23022020",
      Qty: 3450,
      FreeQty: 0,
      Unit: "KGS",
      UnitPrice: 11.8,
      TotAmt: 40710,
      Discount: 0,
      PreTaxVal: 0,
      AssAmt: 40710,
      GstRt: 5,
      IgstAmt: 0,
      CgstAmt: 1017.75,
      SgstAmt: 1017.75,
      CesRt: 0,
      CesAmt: 0,
      CesNonAdvlAmt: 0,
      StateCesRt: 0,
      StateCesAmt: 0,
      StateCesNonAdvlAmt: 0,
      OthChrg: 0,
      TotItemVal: 42745.5,
    };

    bluePrint["SlNo"] = `${index + 1}`;
    bluePrint["PrdDesc"] = billItem[`productDescription${index}`];
    bluePrint["HsnCd"] = billItem[`hsn${index}`];
    bluePrint["Qty"] = parseInt(billItem[`bags${index}`]);
    bluePrint["UnitPrice"] = billItem[`rate${index}`];
    bluePrint["GstRt"] = bill["gstPercentage"] * 2;
    bluePrint["TotAmt"] = billItem[`amount${index}`];
    bluePrint["AssAmt"] = billItem[`amount${index}`];
    bluePrint["CgstAmt"] =
      (bluePrint["AssAmt"] * (bill["gstPercentage"] / 2)) / 100;
    bluePrint["SgstAmt"] = bluePrint["CgstAmt"];
    bluePrint["TotItemVal"] = bluePrint["AssAmt"] + bluePrint["CgstAmt"] * 2;

    temp.push(bluePrint);
  });

  data["ItemList"] = temp;

  downloadJson(data, `invoice-${data["DocDtls"]["No"]}`);
}

function downloadJson(jsonData, filename) {
  jsonData = [jsonData];
  const dataStr =
    "data:text/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify(jsonData));
  const downloadAnchorNode = document.createElement("a");
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", filename + ".json");
  document.body.appendChild(downloadAnchorNode); // required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}

module.exports = {
  downloadJson,
  generateJson,
};
