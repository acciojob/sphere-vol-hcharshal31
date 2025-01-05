function volume_sphere(event) {
    event.preventDefault();  // Add this line to prevent form submission
    const radiusValue = parseFloat(document.getElementById("radius").value);
    const volume = document.getElementById("volume");
    if(radiusValue < 0 || isNaN(radiusValue)){
        volume.value = "NaN";
        return;
    }
    const sphereVolume = (4 / 3) * Math.PI * Math.pow(radiusValue, 3);
    volume.value = sphereVolume.toFixed(4);
} 

document.getElementById("MyForm").onsubmit = volume_sphere;