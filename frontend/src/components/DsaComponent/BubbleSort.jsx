// BubbleSort.js

export function getBubbleSortSteps(arr) {
  const steps = [];
  const temp = [...arr];

  for (let i = 0; i < temp.length - 1; i++) {
    for (let j = 0; j < temp.length - i - 1; j++) {
      // Step: Compare
      steps.push({ type: "compare", indices: [j, j + 1] });

      if (temp[j] > temp[j + 1]) {
        // Step: Swap
        steps.push({ type: "swap", indices: [j, j + 1] });

        // Perform swap in temporary array
        [temp[j], temp[j + 1]] = [temp[j + 1], temp[j]];
      }
    }
  }

  return steps;
}
