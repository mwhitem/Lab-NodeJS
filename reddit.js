
const path = require('path');
const fs = require('fs');
const rp = require('request-promise')
const writePath = path.join(__dirname, 'popular-article-json')

let redditArr = [];
rp('https://www.reddit.com/r/popular.json')
.then(function (json) {
    return JSON.parse(json);
})
.then(function (data) {
    data.data.children.forEach(function (article) {
        redditArr.push({
            title: article.data.title,
            url: article.data.url,
            author: article.data.author
        })
        console.log(redditArr);
    });
})
.catch(function (err) {
    console.log(err);
})

fs.writeFile('popular-articles.json', JSON.stringify(redditArr), function (err) {
    if (err) throw err;
    console.log('saved');
    });
    
    fs.readFile('popular-articles.json', function (err, data) {
        if (err) throw err;
        console.log(JSON.parse(data));
    })