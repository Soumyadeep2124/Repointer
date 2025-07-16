// BinarySearch.js
export function getBinarySearchSteps(arr, target) {
  const steps = [];
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    steps.push({
      type: "compare",
      indices: [mid],
      message: `Comparing arr[${mid}] = ${arr[mid]} with target ${target}`,
    });

    if (arr[mid] === target) {
      steps.push({
        type: "found",
        index: mid,
        message: `Found target ${target} at index ${mid}`,
      });
      return steps;
    } else if (arr[mid] < target) {
      steps.push({
        type: "move-right",
        range: [mid + 1, high],
        message: `Target ${target} > arr[${mid}] → Search right half`,
      });
      low = mid + 1;
    } else {
      steps.push({
        type: "move-left",
        range: [low, mid - 1],
        message: `Target ${target} < arr[${mid}] → Search left half`,
      });
      high = mid - 1;
    }
  }

  steps.push({
    type: "not-found",
    message: `Target ${target} not found in the array`,
  });
  return steps;
}
