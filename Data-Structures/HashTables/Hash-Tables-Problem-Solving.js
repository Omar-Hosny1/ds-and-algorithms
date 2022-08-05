const firstRepeatedCharacter = (array) => {
  let MAP = new Map();
  for (let i = 0; i < array.length; i++) {
    if (MAP.get(array[i]) == undefined) {
      MAP.set(array[i], false);
    } else if (MAP.get(array[i]) == false) {
      return array[i];
    }
  }
  return "No Repeated Characters!";
};
// console.log(firstRepeatedCharacter([2, 3, 1, 2]));
