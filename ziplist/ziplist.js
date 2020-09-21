const dataOne = [1, 2, 3];
const dataTwo = ['a', 'b', 'c'];

function ziplist(one, two) {
  const newArray = [];
  for (let i = 0; i < one.length; i++) {
    newArray.push(one[i]);
    newArray.push(two[i]);
  }
  return newArray;
}

function zipListTheSimpleWay(one, two) {
  return _.flatten(_.zip(one, two));
}

console.log(ziplist(dataOne, dataTwo));
console.log(zipListTheSimpleWay(dataOne, dataTwo));
