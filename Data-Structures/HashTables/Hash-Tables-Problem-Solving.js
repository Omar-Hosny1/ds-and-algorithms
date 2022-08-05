const firstRepeatedCharacter = (array) => {
  let MAP = new Map();
  for (let i = 0; i < array.length; i++) {
    if (MAP.get(array[i]) == undefined) {
      MAP.set(array[i], 1);
    } else if (MAP.get(array[i])) {
      const numOfRepeating = MAP.get(array[i]);
      MAP.set(array[i], numOfRepeating + 1);
    }
  }
  const GreatestRe = Math.max(...MAP.values());

  for (let item of MAP) {
    if (item[1] == GreatestRe) return item[0];
  }

  return GreatestRe;
};
console.log(firstRepeatedCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]));

const firstRepeatedCharacterTwo = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] == array[j]) {
        return array[i];
      }
    }
  }
  return "No Repeated Characters!";
};
console.log(firstRepeatedCharacterTwo([2, 5, 5, 2, 3, 5, 1, 2, 4]));

const firstRepeatedCharacterThree = (array) => {
  let map = {};
  for (let i = 0; i < array.length; i++) {
    if (map[array[i]] == undefined) {
      map[array[i]] = true;
    } else if (map[array[i]] == true) {
      return array[i];
    }
  }
  return undefined;
};
console.log(firstRepeatedCharacterThree([2, 5, 5, 2, 3, 5, 1, 2, 4]));
