//Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(width, height, depth) {
  const surfaceArea = 2 * (depth * width + width * height + height * depth);
  const volume = depth * width * height;
  
  return [surfaceArea, volume];
}
