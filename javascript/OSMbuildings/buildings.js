var map = new OSMBuildings({
  container: 'map',
  position: { latitude: 52.52128, longitude: 13.40894 },
  zoom: 16,
  minZoom: 15,
  maxZoom: 20,
  tilt: 40,
  rotation: 300,
  effects: ['shadows'],
  attribution: '© Data <a href="https://openstreetmap.org/copyright/">OpenStreetMap</a> © Map <a href="https://mapbox.com/">Mapbox</a> © 3D <a href="https://osmbuildings.org/copyright/">OSM Buildings</a>'
});


map.addMapTiles('https://api.mapbox.com/styles/v1/osmbuildings/cjt9gq35s09051fo7urho3m0f/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoib3NtYnVpbGRpbmdzIiwiYSI6IjNldU0tNDAifQ.c5EU_3V8b87xO24tuWil0w');
map.addGeoJSONTiles('https://{s}.data.osmbuildings.org/0.2/dixw8kmb/tile/{z}/{x}/{y}.json');

let rotation = 0;

function rotate () {
  map.setRotation(rotation);
  rotation = (rotation+1) % 360;
  requestAnimationFrame(rotate);
}

// rotate (); // uncomment to start rotation