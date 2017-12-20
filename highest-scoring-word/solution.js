function high(str){
  var wordList = str.split(” “);
  var maxScore = -1;
  var maxWord = “”;
  for (var index = 0 ; index < wordList.length; index++){
    var score = wordScore(wordList[index]);
    if (score > maxScore){
      maxScore = score;
      maxWord = wordList[index];
    }
  }
  return maxWord;
}

function wordScore(word){
  charArray = word.split(“”);
  var sum = 0;
  charArray.forEach(function(element) {sum = sum + element.charCodeAt(0) - ‘a’.charCodeAt(0) + 1});
  return sum;
}
