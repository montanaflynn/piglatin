module.exports = function piglatin(text) {
  var words = text.split(/\W+/)
  var piggish = ""
  for (var i = 0; i < words.length; i++) {
    var word = words[i]
    var firstLetter = word.charAt(0)
    if (word.length > 2) {
      piggish = piggish + word.substring(1) + firstLetter + "ay "
    } else {
      piggish = piggish + word + " "
    }
  }
  return piggish.toLowerCase().trim();
}