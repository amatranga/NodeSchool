const request = require('request');
require('dotenv').config();
const apiKey = process.env.GOOGLE_API_KEY;

module.exports = {
  getData(address, cb) {
    const geoCodeUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + apiKey
    
    request(geoCodeUrl, (error, response, body) => {
      let result = { 
        geoData: JSON.parse(body).results[0]
      }
      cb(result);
    });
  },

  getRandomizedUrls(coordinates, resultCount, cb) {
    let urlsArr = [];
    let lat = String(coordinates.lat);
    let lng = String(coordinates.lng);

    let baseLat = lat.slice(0, lat.indexOf('.') + 3);
    let baseLng = lng.slice(0, lng.indexOf('.') + 3);

    for (let i = 0; i < resultCount; i++) {
      let lat = baseLat + Math.floor(Math.random() * (999 - 100) + 100);
      let lng = baseLng + Math.floor(Math.random() * (999 - 100) + 100);

      urlsArr.push('https://maps.googleapis.com/maps/api/streetview?size=350x200&location=' + lat + ',' + lng + '&heading=151.78&pitch=-0.76&key=AIzaSyB-csukfcDPdI-2zc5geKecHwwl3atroA0');
    }
      
    let result = {
      urls: urlsArr, 
    }

    cb(result);
  }
}
