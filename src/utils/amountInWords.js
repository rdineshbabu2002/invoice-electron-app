export default function amountInWords(amount) {
  //convert num to amount in words including paise in indian style
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
  const crores = ["", "Crore", "Crores"];
  const lakhs = ["", "Lakh", "Lakhs"];
  const thousands = ["", "Thousand", "Thousands"];
  const hundreds = ["", "Hundred"];

  const numArr = amount.toString().split(".");
  const rupees = parseInt(numArr[0], 10);
  const paise = parseInt(numArr[1], 10);
  let words = "";

  function convertNumberToWords(num) {
    let words = "";

    if (num < 20) {
      words = ones[num];
    } else if (num < 100) {
      words = tens[Math.floor(num / 10)] + " " + ones[num % 10];
    } else if (num < 1000) {
      words = ones[Math.floor(num / 100)] + " " + hundreds[1] + " ";
      if (num % 100) {
        words += "and " + convertNumberToWords(num % 100);
      }
    } else if (num < 100000) {
      words =
        convertNumberToWords(Math.floor(num / 1000)) + " " + thousands[2] + " ";
      if (num % 1000) {
        words += convertNumberToWords(num % 1000);
      }
    } else if (num < 10000000) {
      words =
        convertNumberToWords(Math.floor(num / 100000)) + " " + lakhs[2] + " ";
      if (num % 100000) {
        words += convertNumberToWords(num % 100000);
      }
    } else {
      words =
        convertNumberToWords(Math.floor(num / 10000000)) +
        " " +
        crores[2] +
        " ";
      if (num % 10000000) {
        words += convertNumberToWords(num % 10000000);
      }
    }
    return words;
  }

  words = convertNumberToWords(rupees);
  words += " Rupees ";

  if (paise) {
    words += "and " + convertNumberToWords(paise) + " Paise";
  }

  return words;
}
