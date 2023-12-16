interface Comparator<T extends Object> {
  (a: T, b: T): number;
}

interface GetIndex<T extends Object> {
  (input: T[], comparator: Comparator<T>): number;
}

interface GetElement<T extends object> {
  (input: T[], comparator: Comparator<T>): T | null;
}

const getMaxIndex: GetIndex<any> = (input, comparator) => {
  if (input.length === 0) {
    return -1;
  }
  var maxIndex = 0;
  for (var i = 1; i < input.length; i++) {
    if (comparator(input[i], input[maxIndex]) > 0) {
      maxIndex = i;
    }
  }
  return maxIndex;
};

const getMaxElement: GetElement<any> = (input, comparator) => {
  var index = getMaxIndex(input, comparator);
  return index === -1 ? null : input[index];
};

const getMinIndex: GetIndex<any> = (input, comparator) => {
  if (input.length === 0) {
    return -1;
  }
  var maxIndex = 0;
  for (var i = 1; i < input.length; i++) {
    if (comparator(input[maxIndex], input[i]) > 0) {
      maxIndex = i;
    }
  }
  return maxIndex;
};

const getMinElement: GetElement<any> = (input, comparator) => {
  var index = getMinIndex(input, comparator);
  return index === -1 ? null : input[index];
};

const getMedianIndex: GetIndex<any> = (input, comparator) => {
  if (input.length === 0) {
    return -1;
  }
  var data = input.slice().sort(comparator);
  return input.indexOf(data[Math.floor(data.length / 2)]);
};

const getMedianElement: GetElement<any> = (input, comparator) => {
  var index = getMedianIndex(input, comparator);
  return index === -1 ? null : input[index];
};
interface GetAverageValue<T extends Object> {
  (input: T[], getValue: (value: T) => number): number;
}
const getAverageValue: GetAverageValue<any> = (input, getValue) => {
  if (input.length === 0) {
    return -1;
  }
  return (
    input.reduce(function (result, item) {
      return result + getValue(item);
    }, 0) / input.length
  );
};

export {
  getMaxIndex,
  getMaxElement,
  getMinIndex,
  getMinElement,
  getMedianIndex,
  getMedianElement,
  getAverageValue,
};
