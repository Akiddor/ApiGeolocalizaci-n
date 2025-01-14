function geoFindMe() {
    const status = document.querySelector("#status");
    const mapLink = document.querySelector("#map-link");
    const map = document.querySelector("#mapaL");
  
    mapLink.href = "";
    mapLink.textContent = "";
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      status.textContent = "";
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
      map.src = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.003},${latitude - 0.001},${longitude + 0.003},${latitude + 0.001}&amp;layer=mapnik`;

      
    }
  
    function error() {
      status.textContent = "Unable to retrieve your location";
    }
  
    if (!navigator.geolocation) {
      status.textContent = "Geolocation is not supported by your browser";
    } else {
      status.textContent = "Locating…";
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }
  
  document.querySelector("#find-me").addEventListener("click", geoFindMe);