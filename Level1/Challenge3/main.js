function displayCoords(event) {
    let x = event.clientX;
    let y = event.clientY;
    let text = "Position X : " + x + ", Position Y : " + y;
    document.getElementById("coordsPosition").innerHTML = text;
  }
  
  function resetCoords() {
    document.getElementById("coordsPosition").innerHTML = "";
}