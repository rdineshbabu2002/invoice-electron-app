export default function inWords(amount) {
  const ones = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];
  const tens = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];
  const teens = [
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];

  let words = "";

  if (amount === 0) {
    return "Zero Rupees";
  }

  // Split amount into rupees and paise
  let [rupees, paise] = amount.toString().split(".");

  // Convert rupees to words
  if (rupees.length > 3) {
    words += inWords(rupees.slice(0, -3)) + " Thousand ";
    rupees = rupees.slice(-3);
  }

  if (rupees.length === 3) {
    words += ones[rupees[0]] + " Hundred ";
    rupees = rupees.slice(1);
  }

  if (rupees.length === 2) {
    if (rupees[0] === "1") {
      words += teens[rupees[1]] + " ";
      rupees = "";
    } else {
      words += tens[rupees[0]] + " ";
      rupees = rupees.slice(1);
    }
  }

  if (rupees.length === 1) {
    words += ones[rupees[0]] + " ";
  }

  words += "Rupees";

  // Convert paise to words
  if (paise) {
    if (paise.length === 1) {
      paise = paise.padEnd(2, "0");
    }

    words += " and " + tens[paise[0]] + " " + ones[paise[1]] + " Paise";
  }

  return words.toUpperCase();
}
