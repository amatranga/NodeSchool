
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const request = require('request');

require('dotenv').config()

app.use(express.static(path.join(__dirname, '../')));

app.get('/search', function(req, res, next) {
  address = req.query.address;

  let apiKey = process.env.GOOGLE_API_KEY
  request(
    'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + apiKey, function (error, response, body) {

  let latInput = JSON.parse(body).results[0].geometry.location.lat;
  let lngInput = JSON.parse(body).results[0].geometry.location.lng;

  let strLatInput = String(latInput);
  let strLngInput = String(lngInput);

  console.log(strLatInput);
  console.log(strLngInput);

  let baseLat = strLatInput.slice(0, strLatInput.length - 5);
  let baseLng = strLngInput.slice(0, strLngInput.length - 5);

  console.log(baseLat); 
  console.log(baseLng); 

  let urlsArr = [];

  for (let i = 0; i < 20; i++) {
    let randomize1 = Math.floor(Math.random() * (999 - 100) + 100);
    let randomize2 = Math.floor(Math.random() * (999 - 100) + 100);

    let lat = baseLat + randomize1;
    let lng = baseLng + randomize2;

    urlsArr.push(
      'https://maps.googleapis.com/maps/api/streetview?size=600x300&location=' + lat + ',' + lng + '&heading=151.78&pitch=-0.76&key=AIzaSyB-csukfcDPdI-2zc5geKecHwwl3atroA0');
  }

  res.send(urlsArr);
  });
});

app.listen(PORT, () => {
  console.log('NodeSchool is running on port', PORT);
});

