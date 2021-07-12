
var path = require('path');
var fs = require('fs');

var dataPath = path.join(__dirname, '../data.json')

fs.writeFile('chirps.json', function(err, data) {
if(err) return console.log(err);
console.log(data.toString());
});

let chirps = [{
    username: "bob",
    chirpText: "hi"
},
{
    username: "tom",
    chirpText: "hello"
},
{
    username: "jan",
    chirpText: "bonjour"
},
{
username: "ben",
chirpText: "aloha"
},
{
    username: "zac",
    chirpText: "hola"
}]


