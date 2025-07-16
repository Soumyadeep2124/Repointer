export function getQuickSortSteps(arr) {
  const steps = [];
  const temp = [...arr];

  function quickSort(start, end) {
    if (start < end) {
      const pivotIndex = partition(start, end);
      quickSort(start, pivotIndex - 1);
      quickSort(pivotIndex + 1, end);
    }
  }

  function partition(start, end) {
    const pivot = temp[end];
    let i = start;

    for (let j = start; j < end; j++) {
      steps.push({ type: "compare", indices: [j, end] });
      if (temp[j] < pivot) {
        steps.push({ type: "swap", indices: [i, j] });
        [temp[i], temp[j]] = [temp[j], temp[i]];
        i++;
      }
    }

    steps.push({ type: "swap", indices: [i, end] });
    [temp[i], temp[end]] = [temp[end], temp[i]];
    return i;
  }

  quickSort(0, temp.length - 1);
  return steps;
}
