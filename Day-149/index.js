function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort((a, b) => b - a);
  blueShirtHeights.sort((a, b) => b - a);
  const firstRow = redShirtHeights[0] < blueShirtHeights[0] ? "RED" : "BLUE";
  for (let i = 0; i < redShirtHeights.length; i++) {
    const redShirtHeight = redShirtHeights[i];
    const blueShirtHeight = blueShirtHeights[i];
    if (firstRow === "RED") {
      if (redShirtHeight >= blueShirtHeight) return false;
    } else if (blueShirtHeight >= redShirtHeight) return false;
  }
  return true;
}

// Do not edit the line below.
exports.classPhotos = classPhotos;
