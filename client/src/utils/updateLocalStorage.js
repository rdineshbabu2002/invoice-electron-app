export default function updateLocalStorage() {
  let values = [
    {
      name: "BPT 26 KG BOLIED RICE",
      "hsn-acs": "10063010",
      qty: 26,
      rate: 1206,
    },
    {
      name: "BPT 75 KG BOLIED RICE",
      "hsn-acs": "10063010",
      qty: 75,
      rate: 3500,
    },
    {
      name: "BRAN 49KG",
      "hsn-acs": "10063010",
      qty: 49,
      rate: 10,
    },
  ];

  if (!localStorage.getItem("goods")) {
    localStorage.setItem("goods", JSON.stringify(values));
  }

  let customerValues = [
    {
      name: "PCM TRADERS",
      address: "517/6, Petthampalayam Road, Perundurai.",
      gstin: "33ABMFS6116L1ZV",
    },
  ];

  if (!localStorage.getItem("customers")) {
    localStorage.setItem("customers", JSON.stringify(customerValues));
  }
}
