function setArcGetGeoPoints(pointStart, pointEnd, smoothness, color) {
  // calculate normal
  var geoPoints = [];
  var cb = new THREE.Vector3(), ab = new THREE.Vector3(), normal = new THREE.Vector3();
  cb.subVectors(new THREE.Vector3(), pointEnd);
  ab.subVectors(pointStart, pointEnd);
  cb.cross(ab);
  normal.copy(cb).normalize();
  // get angle between vectors
  var angle = pointStart.angleTo(pointEnd);
  //////////
  if (Math.abs(angle) < (Math.PI / 180)) {
    smoothness = 2;
  }
  else {
    smoothness = Math.abs(angle) * 180 / Math.PI;
    smoothness = Math.floor(smoothness);
    if (smoothness < 2) {
      smoothness = 2;
    }
  }
  //////
  if (Math.abs(angle) > Math.abs(angle - Math.PI * 2)) {
    angle = angle - Math.PI * 2;
  }
  var angleDelta = angle / (smoothness - 1);
  var geometry = new THREE.Geometry();
  for (var i = 0; i < smoothness; i++) {
    var v3 = pointStart.clone().applyAxisAngle(normal, angleDelta * i);
    var latLon = vector3toLonLat(v3.clone());
    geoPoints.push(latLon);
    geometry.vertices.push(v3);
  }
  var arc = new THREE.Line(geometry, new THREE.LineBasicMaterial({
    color: color, linewidth: 3.0
  }));
  return [arc, geoPoints];
}
