var scrape = require('website-scraper');
// var options = {
//   urls: ['http://butdoesitfloat.com/'],
//   directory: '/scraped-images',
// };
scrape({
  urls: ['http://www.cope-arnold.com/vedas.html'],
  directory: './coped',
  sources: [
    {selector: 'img', attr: 'src'}
  ],
  onResourceSaved: (resource) => {
    console.log(`Resource ${resource} was saved to fs`);
  }
});
console.log('SCRAPED THAT SHIT!');
// .then(console.log).catch(console.log);
// // with promise
// scrape(options).then((result) => {
//     /* some code here */
// }).catch((err) => {
//     /* some code here */
// });

// // or with callback
// scrape(options, (error, result) => {
//     /* some code here */
// });