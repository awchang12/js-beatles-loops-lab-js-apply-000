function theBeatlesPlay(musicians, instruments) {
  var strings = [];
  for(var i = 0; i < musicians.length; i++) {
    strings.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return strings;
}

function johnLennonFacts(facts) {
  var factsExclamation = [];
  
  for(var i = 0; i < facts.length; i++) {
    factsExclamation.push(facts[i] + '!!!');
  }
  return factsExclamation;
}