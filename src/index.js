/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let count = 0;
  let arr = [0];
  preferences = arr.concat(preferences);

  let i;
  for (i = 1; i <= preferences.length; i++) {
    let firstEl = preferences[i];
    let secondEl = preferences[firstEl];
    let thirdEl = preferences[secondEl];

    if
    ((thirdEl == i)
      && (preferences[firstEl] != firstEl
        && preferences[secondEl] != secondEl
        && preferences[thirdEl] != thirdEl)
    ) {
      count++;
    }
  }
  return count / 3;
};