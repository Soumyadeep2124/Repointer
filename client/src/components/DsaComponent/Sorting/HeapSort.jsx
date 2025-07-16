export function getHeapSortSteps(arr) {
  const steps = [];
  const temp = [...arr];
  const n = temp.length;

  function heapify(n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n) {
      steps.push({ type: "compare", indices: [left, largest] });
      if (temp[left] > temp[largest]) largest = left;
    }

    if (right < n) {
      steps.push({ type: "compare", indices: [right, largest] });
      if (temp[right] > temp[largest]) largest = right;
    }

    if (largest !== i) {
      steps.push({ type: "swap", indices: [i, largest] });
      [temp[i], temp[largest]] = [temp[largest], temp[i]];
      heapify(n, largest);
    }
  }

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(n, i);

  for (let i = n - 1; i > 0; i--) {
    steps.push({ type: "swap", indices: [0, i] });
    [temp[0], temp[i]] = [temp[i], temp[0]];
    heapify(i, 0);
  }

  return steps;
}
