var mymap = L.map('mapid').setView([38.6270, -90.23], 12);

var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
  minZoom: 11,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

var geojsonFeature = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "Restaurant": "Hon's Wok",
        "Address": "4489 Forest Park Ave, St. Louis, MO 63108",
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.25886133313179,
          38.63875051325599
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Restaurant": "Sawmill BBQ",
        "Address": "4060 Mississippi Ave, Cahokia, IL 62206",
        "iconSize": [45, 40],
        "iconURL": "40https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_1200,h_800,f_auto,fl_lossy,q_80,c_fit/dxx4lstfogtov3t2uubf"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.18700629472733,
          38.57323083583269
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
      "Restaurant": "Southern",
      "Address": "3108 Olive St, St. Louis, MO 63103",
      "iconSize": [45, 40],
      "iconURL": "https://static.wixstatic.com/media/41e341_adfd2522cb0848b0b1fd055f8f391dd5~mv2.png/v1/fill/w_500,h_272,al_c,q_85,usm_0.66_1.00_0.01/Southern_Knife%20Rack_transparent.webp"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.22436141967773,
          38.635215520861045
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
      "Restaurant": "Sameem Afghan Restaurant and Catering",
      "Address": "4341 Manchester Ave, St. Louis, MO 63110",
      "iconSize": [45, 40],
      "iconURL": "https://www.sameems.com/uploads/b/f7a4c930-d023-11ea-ad5a-5f3fef2343a3/d6a33ce3ed77478a80eda2bf33f0b4ca.jpeg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.25839865207672,
          38.626945922411664
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
      "Restaurant": "Hodak's Restaurant & Bar",
      "Address": "2100 Gravois Ave, St. Louis, MO 63104",
      "iconSize": [45, 40],
      "iconURL": "https://scontent-ort2-2.xx.fbcdn.net/v/t1.6435-9/34645997_2174689605891487_5750195506869436416_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Th24Ukbn_vQAX8jvvEj&_nc_ht=scontent-ort2-2.xx&oh=00_AT_6IsoE-R2XUy7zO7pgHnTYjYs1bntw2e25dAhKQnDZEg&oe=6214E138"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.21822184324265,
          38.60653368518893
        ]
      }
    }
  ]
}


function createCustomIcon (feature, latlng) {
  let myIcon = L.icon({
    iconUrl: 'https://cdn3.iconfinder.com/data/icons/map-markers-1/512/cafe-512.png',
    iconSize: [40, 40], // width and height of the image in pixels
  })
  return L.marker(latlng, { icon: myIcon })
}

let myLayerOptions = {
  pointToLayer: createCustomIcon,
  onEachFeature: function (feature, layer) {
    layer.bindPopup('<b>'+feature.properties.Restaurant+'</b><br> '+feature.properties.Address+'</br>');
  }
}
L.geoJSON(geojsonFeature, myLayerOptions).addTo(mymap);
