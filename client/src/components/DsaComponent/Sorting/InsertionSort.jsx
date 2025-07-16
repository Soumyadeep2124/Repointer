// InsertionSort.js

export function getInsertionSortSteps(arr) {
  const steps = [];
  const temp = [...arr];

  for (let i = 1; i < temp.length; i++) {
    let key = temp[i];
    let j = i - 1;

    // Step: Compare key with each element to its left
    while (j >= 0 && temp[j] > key) {
      steps.push({ type: "compare", indices: [j, j + 1] });
      steps.push({ type: "swap", indices: [j, j + 1] });
      temp[j + 1] = temp[j]; // Shift element
      j = j - 1;
    }

    temp[j + 1] = key;
  }

  return steps;
}
