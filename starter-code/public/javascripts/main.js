function startMap(){
  const center = {
    lat: 41.39,
    lng: 2.19
  }

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: center
  })

  let markers = []
  myPlace.forEach(place => {
    let position = {
      lat: place.location
    }
  })
}



startMap()
