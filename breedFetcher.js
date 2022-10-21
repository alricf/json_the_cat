const request = require('request');
const process = require('process');

request(`https://api.thecatapi.com/v1/breeds/search?q=${process.argv[2]}`, (error, response, body) => {
  if (error) {
    throw Error('Request Failed');
  }
  const data = JSON.parse(body);
  if (response.statusCode === 200 && data.length < 1) {
    throw Error('Breed Not Found');
  }
  console.log(data[0].description);
});