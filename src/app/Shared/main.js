function initMap(){
	const ubi = new Location(()=> {
		
		const myLatLng = {lat: ubi.latitude, lng: ubi.longitude};
		console.log(myLatLng)
		var texto = '<h1> Mi posición </h1>' + '<p> Descripcion </p>' + '<a href="http://www.google.com">Pagina web</a>';

		const options = {
			center: myLatLng,
			zoom: 14
		}

		var map = document.getElementById('map');

		const mapa = new google.maps.Map(map, options);

		const mark = new google.maps.Marker({
			position: myLatLng,
			map: mapa,
			title: "Ubication"
		});

		var info = new google.maps.InfoWindow({
			content: texto
		});

		mark.addListener('click', function() {
			info.open(mapa,mark);
		})
	});
}