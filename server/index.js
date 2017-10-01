const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const geoData = require('./geoData');

app.use(express.static(path.join(__dirname, '../')));

app.get('/search', function(req, res, next) {
  let address = req.query.address;
  let resultCount = req.query.resultCount;

  geoData.getData(address, data => {
    let coordinates = {
      lat: data.geoData.geometry.location.lat,
      lng: data.geoData.geometry.location.lng
    }
    geoData.getRandomizedUrls(coordinates, resultCount=30, result => {
      res.send(result.urls);
    });
  });

});

app.listen(PORT, () => {
  console.log('NodeSchool is running on port', PORT);
});

