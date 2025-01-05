function volume_sphere() {
    const radiusValue = parseFloat(document.getElementById("radius").value);
	const volume = document.getElementById("volume");
	if(radiusValue < 0 || isNaN(radiusValue)){
		 volume.value = NaN;
		return;
	}
	const sphereVolume = (4 / 3) * Math.PI * Math.pow(radiusValue, 3);
	volume.value = sphereVolume.toFixed(4);
	
} 

document.getElementById("submit").onclick = volume_sphere;

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
