class Location{
	constructor(callback) {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((pos)=>{
				this.latitude = pos.coords.latitude;
				this.longitude = pos.coords.longitude;

				callback();
			});
		}else{
			alert("No lo soporta")
		}
	}
}


