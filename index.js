function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}

var lowercase = 'hello!'
var uppercase = "HELLO!"
var mixedCase = `Hi there!`

function sayHiToGrandma(string){
  if (lowercase){
    return "I can\'t hear you!"
  }
  else if (uppercase){
    return "YES INDEED!"
  }
  else if ("I love you, Grandma.") {
    return "I love you, too."
  }
}
