module.exports = async (array, asyncfunction) => {
  let finalList = [];

  for (const item of array) {
    const result = await asyncfunction(item);
    finalList = [...finalList, result];
  }

  return finalList;
};
