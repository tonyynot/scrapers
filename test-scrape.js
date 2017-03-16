var fs = require('fs'),
    request = require('request');
// require cheerio

// Find all $('img') in body, push to array, pass array through filename arg
// Same for filenames

http://stackoverflow.com/questions/19830088/download-multiple-images-at-once-with-javascript

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){

    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

download('http://anthonyramella.com/img/lingscars.jpg', 'google.png', function(){
  console.log('Downloaded!');
});