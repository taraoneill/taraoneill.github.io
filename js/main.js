//$(document).ready(function(){
  
  var gmap;
  //var myLatlng = {lat:36.850239, lng:-76.285802};
  function initMap() {
    gmap = new google.maps.Map(document.getElementById('tnmap'), {
        center: {lat: 40.663767, lng: -95.685564},
        zoom:4,
        scroll:false,      
    });

  var locations = [
  //Florida
    {name:'Sundowners Restaurant', notes: 'Dock Cat and the best frozen drinks in Key Largo.', lat:25.144086, lng:-80.398622},
    {name:'Senor Frijoles Restaurant', notes: 'Friendly, but homophobic waitstaff', lat:25.143527, lng: -80.397810},
    {name: "Mangove Mike's Cafe Breakfast", notes: "Second best breakfast in the Keys", lat:24.923507, lng: -80.629497},
    {name: "Anne's Beach", notes: "Beautiful Sunrises, knee deep water, but watch out for sand fleas!", lat:24.848723, lng: -80.741119},
    {name: "Everglade's National Park, Anhinga Trail", notes: "Best place in the park to see alligators!", lat:25.382897,lng: -80.607231},
    {name: "Doc's Diner Breakfast", notes: "Best breakfast in the Keys!", lat: 25.096115, lng:-80.439242},
    {name: "Marriott Key Largo Bay Resort", notes: "Our favorite place to stay", lat:25.142069, lng: -80.400272},
    {name: "Sloppy Joe's", notes: "Best place to eat with live entertainment!", lat:24.559095, lng: -81.804972},
    {name: "Southern Most Point in the US", notes: "Cannot see Cuba from here", lat:24.546645, lng: -81.797371},
    {name: "Zachary Taylor State Park", notes: "Bring your Snorkel!", lat:24.546020, lng: -81.811190},
    {name: "Flying Monkeys", notes: "Mostly frozen drinks", lat:24.558350, lng: -81.804431},
    {name: "Rendezvous Restaurant and Pub", notes: "200+ Craft Beer, esp Banana Bread Beer", lat: 29.894462, lng: -81.313170},
    {name: "The Floridian Restaurant", notes: "Best food in Florida! Vegetarian/Vegan friendly", lat:29.894025, lng: -81.313800},
    {name: "Castillo de San Marcos National Monument", notes: "An old Fort with breathtaking harbor views", lat:29.897880, lng: -81.311208},
    {name: "St. Augustine Light House", notes: "Great historical visit, especially the artifact restoration", lat:29.885459, lng: -81.288397},
    {name: "Casa Monica Marriott", notes: "Where we stayed, beautiful and historic", lat:29.891876, lng: -81.313526},
    //Washington DC
    {name: "National Building Museum", notes:"We saw 'The Beach' exhibhit, summer 2015", lat:38.897754, lng: -77.017671},
    {name: "Gordon Biersch", notes: "Craft Beer", lat:38.896901, lng:-77.024119},
    {name: "Courtyard Washington Convention Center", notes: "Where we stayed, used to be a bank", lat:38.897023, lng: -77.024542},
    //New Jersey
    {name: "Main Street Tavern", notes:"Where dreams go to die", lat: 40.554440, lng: -74.279557},
    {name: "Home Sweet Home", notes:"Where the cats, dog and bunny rabbit roam", lat:40.605837, lng: -74.272680},
    {name: "Six Flags Great Adventure", notes: "2014 and 2015 Season Pass Holders", lat:40.137101, lng: -74.439979},
    {name: "Kerasotes ShowPlace Theatres", notes: "RiffTrax!", lat:40.785259, lng: -74.046620},
    {name: "Keansburg Amusement Park", notes: "Try not to die on the rides", lat:40.455763, lng: -74.136863},
    {name: "Michael's Roscommon House", notes: "The best thing about living in Belleville", lat:40.801338, lng: -74.165162},
    //New York
    {name: "Brooklyn Expo Center", notes: "Coffee and Tea Festival 2015", lat:40.728132, lng:-73.957816},
    {name: "Renaissance New York Hotel 57", notes: "Mom and Dad (O'Neill) stayed here and we tagged along", lat: 40.760978, lng: -73.969368},
    {name: "Belasco Theatre", notes: "Where we saw 'Hedwig and the Angry Inch' Jan 11, 2015", lat: 40.756630, lng: -73.983809},
    {name: "Rice to Riches", notes: "Rice Pudding!", lat:40.722074, lng: -73.995739},
    {name: "Jaqueline Kennedy Onassis Reservoir", notes: "In Central Park", lat: 40.786053, lng: -73.963921},
    {name: "Washington Square Arch", lat:40.731207, lng: -73.997136},
    {name: "Pine Box Rock Shop", note: "Vegan Bar, bring your dog!", lat:40.705545, lng: -73.932448},
    {name: "Jeremy's Ale House", notes: "Bras on the wall", lat:40.707805, lng: -74.002161},
    {name: "Music Hall of Williamsburg", notes: "We saw Alkaline Trio here on October 24, 2014", lat:40.719180, lng: -73.961538 },
    {name: "Pasticceria Bruno Cafe", notes: "Delicious Village Desserts, closed in 2015", lat: 40.727714, lng: -73.999527},
    {name: "Imperial Theatre", notes: "Saw Les Miserables on October 4, 2014 with Patrick and A", lat:40.758915, lng: -73.986783},
    {name: "Coney Island Boardwalk", notes: "Played hookey and flew a kite", lat:40.572774, lng: -73.978156},
    {name: "Studio 54 Theatre", notes: "Saw Cabaret here on March 30, 2014", lat:40.764372, lng: -73.983599},
    {name: "Majestic Theatre", notes: "Saw Phanton of the Opera here on January 11, 2014", lat:40.758452, lng: -73.988151},
    //Massachusetts
    {name: "The Boston Common Frog Pong", notes: "Frog Statues and bold squirrels", lat:42.356177, lng: -71.065171},
    {name: "Cheers", notes: "Not everybody knew our name", lat:42.355955, lng: -71.071051},
    {name: "Beantown Pub", notes: "Hockey and Beer, plenty of Sam Adams", lat: 42.357349, lng: -71.061191},
    {name: "Christopher Columbus Waterfront Park", notes: "Arches and Harbor Walk", lat:42.360937, lng: -71.051612},
    {name: "Doyle's Cafe", notes: "Free beer after Sam Adams Tour, Many movie scenes filmed here", lat:42.306614, lng: -71.107229},
    {name: "Sam Adam's Brewery", notes: "Free beer!", lat: 42.314604, lng: -71.102257},
    {name: "Boston Marriott Copley Place", notes: "Where we stayed in Boston, May 2014", lat:42.347044, lng: -71.079418},
    //Tennessee
    {name: "Ober Gatlinburg Ski Area", notes: "Snow Tubing!", lat:35.703252, lng: -83.557779},
    {name: "Climbworks", notes: "ziplining!", lat:35.763280, lng: -83.326523},
    {name: "Puckers Bar", notes: "Karaoke and drunk friendships", lat:35.712116, lng: -83.517703},
    {name: "Fairfield Inn & Suites Gatlinburg North", notes: "We stayed here December 2013", lat:35.724570, lng: -83.509356},
    {name: "Ramsey Cascades", notes: "8 mile hike to a stunning waterfall", lat:35.702675, lng: -83.357762},
    //Virginia
    {name: "Renaissance Portsmouth-Norfolk Waterfront Hotel", notes: "Where we stayed in Norfolk", lat:36.837532, lng: -76.296339},
    {name: "Roger Brown's Restaurant and Sports Bar", lat: 36.835437, lng: -76.300244}
    ]

    locations.forEach(function(element, index, array) {
      var marker, content;

      marker = createMarker (element);
      content = createInfoWindow (element, marker);
    });

    function createMarker (element) {
      var coordinates = new google.maps.LatLng(element.lat, element.lng);

      var marker = new google.maps.Marker ({
        position: coordinates,
        map:gmap,
        title:element.name
      });
      return marker;
   }

    function createInfoWindow (element,marker){
      var contentString;

      contentString = "<strong><div><span>" + element.name + "</span></div></strong><div>" + element.notes + "</div>";

      var infoWindow = new google.maps.InfoWindow({
        content:contentString,
        maxWidth:150
      });

      google.maps.event.addListener(marker, 'click', function(){
        infoWindow.open(gmap, marker);
      });
    }

  AmCharts.ready(function(){
    var map = new AmCharts.AmMap();
      map.pathToImages = "ammap/images/";

      var dataProvider = {
        map: "usaLow",
        //getAreasFromMap:true,
        areas: [{id:"US-AK", color:"#727272", outlineColor:"#212121", rollOverOutlineColor:"#FFFFFF", selectable:"true"},
                {id:"US-AL", color:"#727272", outlineColor:"#212121", rollOverOutlineColor:"#FFFFFF", selectable:"true"}, 
                {id:"US-AR", color:"#727272", outlineColor:"#212121", rollOverOutlineColor:"#FFFFFF", selectable:"true"}, 
                {id:"US-AZ", color:"#727272", outlineColor:"#212121", rollOverOutlineColor:"#FFFFFF", selectable:"true"},
                {id:"US-CA", color:"#727272", outlineColor:"#212121", rollOverOutlineColor:"#FFFFFF", selectable:"true"},
                {id:"US-CO", color:"#727272", outlineColor:"#212121", rollOverOutlineColor:"#FFFFFF", selectable:"true"},
                {id:"US-CT", color:"#727272", outlineColor:"#212121", rollOverOutlineColor:"#FFFFFF", selectable:"true"},
                {id:"US-DC", color:"#7B1FA2", rollOverColor:"#9C27B0", outlineColor:"#000000", rollOverOutlineColor:"#FFFFFF", selectable:"true", autoZoom:"true", selectedColor:"#E1BEE7", coordinate: "lat: 38.9010, lng: -77.0239"},
                {id:"US-DE", color:"#727272", outlineColor:"#212121", rollOverOutlineColor:"#FFFFFF", selectable:"true"},
                {id:"US-FL", color:"#7B1FA2", rollOverColor:"#9C27B0", outlineColor:"#000000", rollOverOutlineColor:"#FFFFFF", selectable:"true", autoZoom:"true", selectedColor:"#E1BEE7", coordinate: 'lat: 25.1417, lng: -80.3998'},
                {id:"US-GA", color:"#727272", outlineColor:"#212121", rollOverOutlineColor:"#FFFFFF", selectable:"true"},
                {id:"US-HI", color:"#727272", outlineColor:"#212121", rollOverOutlineColor:"#FFFFFF", selectable:"true"},
                {id:"US-IA", color:"#727272", outlineColor:"#212121", rollOverOutlineColor:"#FFFFFF", selectable:"true"},
                {id:"US-ID", color:"#727272", outlineColor:"#212121", rollOverOutlineColor:"#FFFFFF", selectable:"true"},
                {id:"US-IL", color:"#727272", outlineColor:"#212121", rollOverOutlineColor:"#FFFFFF", selectable:"true"},
                {id:"US-IN", color:"#727272", outlineColor:"#212121", rollOverOutlineColor:"#FFFFFF", selectable:"true"},
                {id:"US-KS", color:"#727272", outlineColor:"#212121", rollOverOutlineColor:"#FFFFFF", selectable:"true"},
                {id:"US-KY", color:"#727272", outlineColor:"#212121", rollOverOutlineColor:"#FFFFFF", selectable:"true"},
                {id:"US-LA", color:"#727272", outlineColor:"#212121", rollOverOutlineColor:"#FFFFFF", selectable:"true"},
                {id:"US-MA", color:"#7B1FA2", rollOverColor:"#9C27B0", outlineColor:"#000000", rollOverOutlineColor:"#FFFFFF", selectable:"true", autoZoom:"true", selectedColor:"#E1BEE7", coordinate: "lat: 42.3499, lng: -71.0760"},
                {id:"US-MD", color:"#727272", outlineColor:"#212121", rollOverOutlineColor:"#FFFFFF", selectable:"true"},
                {id:"US-ME", color:"#727272", outlineColor:"#212121", rollOverOutlineColor:"#FFFFFF", selectable:"true"},
                {id:"US-MI", color:"#727272", outlineColor:"#212121", rollOverOutlineColor:"#FFFFFF", selectable:"true"},
                {id:"US-MN", color:"#727272", outlineColor:"#212121", rollOverOutlineColor:"#FFFFFF", selectable:"true"},
                {id:"US-MO", color:"#727272", outlineColor:"#212121", rollOverOutlineColor:"#FFFFFF", selectable:"true"},
                {id:"US-MS", color:"#727272", outlineColor:"#212121", rollOverOutlineColor:"#FFFFFF", selectable:"true"},
                {id:"US-MT", color:"#727272", outlineColor:"#212121", rollOverOutlineColor:"#FFFFFF", selectable:"true"},
                {id:"US-NC", color:"#727272", outlineColor:"#212121", rollOverOutlineColor:"#FFFFFF", selectable:"true"},
                {id:"US-ND", color:"#727272", outlineColor:"#212121", rollOverOutlineColor:"#FFFFFF", selectable:"true"},
                {id:"US-NE", color:"#727272", outlineColor:"#212121", rollOverOutlineColor:"#FFFFFF", selectable:"true"},
                {id:"US-NH", color:"#727272", outlineColor:"#212121", rollOverOutlineColor:"#FFFFFF", selectable:"true"},
                {id:"US-NJ", color:"#7B1FA2", rollOverColor:"#9C27B0", outlineColor:"#000000", rollOverOutlineColor:"#FFFFFF", selectable:"true", autoZoom:"true", selectedColor:"#E1BEE7", coordinate: "lat: 40.6058, lng: -74.2726"},
                {id:"US-NM", color:"#727272", outlineColor:"#212121", rollOverOutlineColor:"#FFFFFF", selectable:"true"},
                {id:"US-NV", color:"#727272", outlineColor:"#212121", rollOverOutlineColor:"#FFFFFF", selectable:"true"},
                {id:"US-NY", color:"#7B1FA2", rollOverColor:"#9C27B0", outlineColor:"#000000", rollOverOutlineColor:"#FFFFFF", selectable:"true", autoZoom:"true", selectedColor:"#E1BEE7", myLatlng: '{lat: 40.7127, lng: -74.}'},
                {id:"US-OH", color:"#727272", outlineColor:"#212121", rollOverOutlineColor:"#FFFFFF", selectable:"true"},
                {id:"US-OK", color:"#727272", outlineColor:"#212121", rollOverOutlineColor:"#FFFFFF", selectable:"true"},
                {id:"US-OR", color:"#727272", outlineColor:"#212121", rollOverOutlineColor:"#FFFFFF", selectable:"true"},
                {id:"US-PA", color:"#727272", outlineColor:"#212121", rollOverOutlineColor:"#FFFFFF", selectable:"true"},
                {id:"US-RI", color:"#727272", outlineColor:"#212121", rollOverOutlineColor:"#FFFFFF", selectable:"true"},
                {id:"US-SC", color:"#727272", outlineColor:"#212121", rollOverOutlineColor:"#FFFFFF", selectable:"true"},
                {id:"US-SD", color:"#727272", outlineColor:"#212121", rollOverOutlineColor:"#FFFFFF", selectable:"true"},
                {id:"US-TN", color:"#7B1FA2", rollOverColor:"#9C27B0", outlineColor:"#000000", rollOverOutlineColor:"#FFFFFF", selectable:"true", autoZoom:"false", selectedColor:"#E1BEE7", coordinate: "lat: 35.7144, lng: -83.5114"},
                {id:"US-TX", color:"#727272", outlineColor:"#212121", rollOverOutlineColor:"#FFFFFF", selectable:"true"},
                {id:"US-UT", color:"#727272", outlineColor:"#212121", rollOverOutlineColor:"#FFFFFF", selectable:"true"},
                {id:"US-VA", color:"#7B1FA2", rollOverColor:"#9C27B0", outlineColor:"#000000", rollOverOutlineColor:"#FFFFFF", selectable:"true", autoZoom:"true", selectedColor:"#E1BEE7", coordinate: "lat: 36.8452, lng: -76.2899"},
                {id:"US-VT", color:"#727272", outlineColor:"#212121", rollOverOutlineColor:"#FFFFFF", selectable:"true"},
                {id:"US-WA", color:"#727272", outlineColor:"#212121", rollOverOutlineColor:"#FFFFFF", selectable:"true"},
                {id:"US-WI", color:"#727272", outlineColor:"#212121", rollOverOutlineColor:"#FFFFFF", selectable:"true"},
                {id:"US-WV", color:"#727272", outlineColor:"#212121", rollOverOutlineColor:"#FFFFFF", selectable:"true"},
                {id:"US-WY", color:"#727272", outlineColor:"#212121", rollOverOutlineColor:"#FFFFFF", selectable:"true"}],
          
      };

      map.dataProvider = dataProvider;

      //map.areaSettings = {
        //autoZoom:true
        //color: "#CDCDCD",
        //colorSolid: "#5EB7DE",
        //selectedColor: "#39B1C6",
        //outlineColor: "#25242C",
        //rollOverColor: "#88CAE7",
        //rollOverOutlineColor: "#25242C",
        //selectable: true
      //};

   map.addListener("clickMapObject", function (event){
      if (event.mapObject.id === "US-NY") {
      gmap.setCenter ({lat: 40.756956, lng: -73.990488});
      gmap.setZoom(13);
    } else if (event.mapObject.id === "US-NJ") {
      gmap.setCenter ({lat: 40.605817, lng: -74.272680});
      gmap.setZoom(12);
    } else if (event.mapObject.id === "US-MA") {
      gmap.setCenter ({lat:42.347044, lng: -71.079418});
      gmap.setZoom (12);
    } else if (event.mapObject.id === "US-VA") {
      gmap.setCenter ({lat:36.837532, lng: -76.296339});
      gmap.setZoom (13);
    } else if (event.mapObject.id === "US-DC") {
      gmap.setCenter ({lat:38.897023, lng: -77.024542});
      gmap.setZoom (13);
    } else if (event.mapObject.id === "US-TN") {
      gmap.setCenter ({lat:35.702675, lng: -83.357762});
      gmap.setZoom(9);
    } else if (event.mapObject.id === "US-FL") {
      gmap.setCenter ({lat: 28.090055, lng: -80.601035});
      gmap.setZoom(6);
    } else {
      gmap.setCenter ({lat: 40.616608, lng: -101.713926});
      gmap.setZoom (5);
    } 
   
   });

         map.write("usamap");

  })
}


