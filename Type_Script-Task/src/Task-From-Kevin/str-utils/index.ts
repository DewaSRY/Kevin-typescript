interface strFunction {
  (value: string): string;
}

const strReverse: strFunction = (value) => {
  return value.split("").reverse().join("");
};

const strToLower: strFunction = (value) => {
  return value.toLowerCase();
};

const strToUpper: strFunction = (value) => {
  return value.toUpperCase();
};

const strRandomize: strFunction = (value) => {
  var array = value.split("");
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array.join("");
};
const strInvertCase: strFunction = (value) => {
  return value
    .split("")
    .map(function (c) {
      if (c === c.toLowerCase()) {
        return c.toUpperCase();
      } else {
        return c.toLowerCase();
      }
    })
    .join("");
};

export {
  strFunction,
  strReverse,
  strInvertCase,
  strToUpper,
  strToLower,
  strRandomize,
};
