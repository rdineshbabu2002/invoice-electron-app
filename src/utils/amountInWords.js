export default function convertToWords(num) {
  const ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  const scales = ["", "thousand", "lakh", "crore"];

  let numArr = num.toString().split(".");
  let rupees = parseInt(numArr[0]);
  let paise = parseInt(numArr[1]);

  let rupeesWords = "";
  let paiseWords = "";

  if (rupees === 0) {
    rupeesWords = "zero rupees";
  } else {
    let scaleCount = 0;
    while (rupees > 0) {
      let chunk = rupees % 100;
      if (chunk !== 0) {
        let chunkWords = "";
        if (chunk < 10) {
          chunkWords = ones[chunk];
        } else if (chunk < 20) {
          chunkWords = ones[chunk % 10] + "teen";
        } else {
          chunkWords = tens[Math.floor(chunk / 10)] + " " + ones[chunk % 10];
        }
        rupeesWords = chunkWords + " " + scales[scaleCount] + " " + rupeesWords;
      }
      rupees = Math.floor(rupees / 100);
      scaleCount++;
    }
    rupeesWords += "rupees";
  }

  if (paise === 0) {
    paiseWords = "only";
  } else {
    if (paise < 10) {
      paiseWords = ones[paise] + " paise only";
    } else if (paise < 20) {
      paiseWords = ones[paise % 10] + "teen paise only";
    } else {
      paiseWords =
        tens[Math.floor(paise / 10)] + " " + ones[paise % 10] + " paise only";
    }
  }

  return rupeesWords + " and " + paiseWords;
}
