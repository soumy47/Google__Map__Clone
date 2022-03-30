mapboxgl.accessToken = 'pk.eyJ1IjoidXNlcjI4MDI1NTg1IiwiYSI6ImNremlpdnMyZjMweDUzMG8xaWNzcWJhN24ifQ.ctzrYCQkNa2HQpOtWT6HAg';

navigator.geolocation.getCurrentPosition(successLocation, errorlocation, {       
    enableHighAccuracy: true
})
function successLocation(position){
    console.log(position);
    setupMap([position.coords.longitude, position.coords.latitude]);

}


function errorlocation()
{
        // if the locatiom is unavailable, put a default
        setupMap([-1.24, 53.8])

}

function setupMap(center)
{
    const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 15
    })
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav)


    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken 
      });
      
      map.addControl(directions, 'top-left');
     
}

