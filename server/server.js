
const path = require('path');
const fs = require('fs');


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


fs.writeFile('chirps.json', JSON.stringify(chirps), function (err) {
if (err) throw err;
console.log('saved');
});

fs.readFileSync('chirps.json', function (err, data) {
    if (err) throw err;
    console.log(JSON.parse(data));
})