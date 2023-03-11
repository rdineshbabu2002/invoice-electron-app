export default function inWords(amount) {
  const words = [
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
  const tensWords = [
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

  let num = parseInt(amount, 10);
  if (isNaN(num)) {
    return "";
  }

  let wordsString = "";
  if (num === 0) {
    wordsString = "Zero";
  } else if (num < 0) {
    wordsString = "Minus " + inWords(-num);
  } else {
    if (num >= 10000000) {
      wordsString += inWords(Math.floor(num / 10000000)) + " Crore ";
      num %= 10000000;
    }

    if (num >= 100000) {
      wordsString += inWords(Math.floor(num / 100000)) + " Lakh ";
      num %= 100000;
    }

    if (num >= 1000) {
      wordsString += inWords(Math.floor(num / 1000)) + " Thousand ";
      num %= 1000;
    }

    if (num >= 100) {
      wordsString += inWords(Math.floor(num / 100)) + " Hundred ";
      num %= 100;
    }

    if (num >= 20) {
      wordsString += tensWords[Math.floor(num / 10)] + " ";
      num %= 10;
    }

    if (num > 0) {
      wordsString += words[num] + " ";
    }
  }

  return wordsString.trim();
}
