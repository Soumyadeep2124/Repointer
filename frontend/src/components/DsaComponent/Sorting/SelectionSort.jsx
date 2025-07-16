export function getSelectionSortSteps(arr) {
  const steps = [];
  const temp = [...arr];

  for (let i = 0; i < temp.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < temp.length; j++) {
      steps.push({ type: "compare", indices: [minIndex, j] });
      if (temp[j] < temp[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      steps.push({ type: "swap", indices: [i, minIndex] });
      [temp[i], temp[minIndex]] = [temp[minIndex], temp[i]];
    }
  }

  return steps;
}
