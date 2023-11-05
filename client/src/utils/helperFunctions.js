function replaceDotsWithSlashes(inputString) {
  // Use the replace() method with a regular expression to replace all dots with slashes
  return inputString.replace(/\./g, "/");
}

function genreateNewLinesInMiddle(inputString) {
  // find the center of the string and add new line character
  return (
    inputString.substring(0, inputString.length / 2) +
    "\n" +
    inputString.substring(inputString.length / 2)
  );
}

module.exports = {
  replaceDotsWithSlashes,
  genreateNewLinesInMiddle,
};
