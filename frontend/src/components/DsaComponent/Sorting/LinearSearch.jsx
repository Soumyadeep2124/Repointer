// LinearSearch.js
export function getLinearSearchSteps(arr, target) {
  const steps = [];
  for (let i = 0; i < arr.length; i++) {
    steps.push({
      type: "compare",
      indices: [i],
      message: `Comparing arr[${i}] = ${arr[i]} with target ${target}`,
    });

    if (arr[i] === target) {
      steps.push({
        type: "found",
        index: i,
        message: `Found target ${target} at index ${i}`,
      });
      return steps;
    }
  }
  steps.push({
    type: "not-found",
    message: `Target ${target} not found in the array`,
  });
  return steps;
}
