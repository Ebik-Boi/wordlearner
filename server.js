// server.js
// where your node app starts
/* global variableName */
/* global Map */
// init project
const express = require('express');
const http = require('http')
const app = express();
const server = http.Server(app)
server.on('error', console.log)
const readline = require('readline')
const EventEmitter = require('events');
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
app.on('error', function(){})
class WordLearner extends EventEmitter{
  constructor(){
    super()
    new Greeting('hi');
    new Greeting('hello');
    new Greeting('hey');
    this.wordDatabase = new Map([['hi',new Greeting('hi')], ['hello', new Greeting('hello')], ['hey', new Greeting('hey')]])
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question('Would you like to load this onto a server', (answer) => {
      // TODO: Log the answer in a database
      var sent = new Sentence(this, answer.split(' '));
      console.log(`${answer}`);
      switch(answer){
        case 'yes':
          new Promise((resolve, reject) => {
            server.listen(
              process.env.PORT, 
              function() {
                console.log('Your app is listening on port ' + server.address().port);
                resolve()
              }
            )
            .catch((err)=>{
              console.log('')
            })
          })
          rl.close();
          break
        case 'no':
          rl.close();
          break
        default:
          console.log('Invalid answer. Taking as no')
      }
    });
    
    rl.on('line', function(){
      
    })
  }
}
var Interjections = []
class Word {
  constructor(word){
      this._value = 'word'
  }
  spellout(){
    var spelledOut = this._value[0]
    for(let i = 1;i < this._value.length;i++){
     spelledOut += `-${this._value[i]}`
    }
    return spelledOut
  }
}
class
  Interjection extends Word{
  constructor(word){
    super(word)
    this._type = 'Interjection'
  }
}
class Greeting extends Interjection {
  constructor(word){
    super(word)
    this._type = 'Greeting'
  }
}
class Sentence extends Map{
  constructor(bot, words){
    console.log(words)
    super(words)
  }
}
module.exports = WordLearner
console.log(new WordLearner())