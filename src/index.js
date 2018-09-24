/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
 var c = 0;
for (var i=0; i<preferences.length;i++) {
 if (preferences[i]!==i+1&&
      preferences[preferences[i]-1]!==i+1&&
      preferences[preferences[i]-1]!==preferences[i]&&
      preferences[preferences[preferences[i]-1]-1]===i+1) {
        c += 1;
  }
}
return c / 3;
 // your implementation
};
