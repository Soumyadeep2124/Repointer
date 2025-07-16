export function getMergeSortSteps(arr) {
  const steps = [];
  const temp = [...arr];

  function mergeSort(start, end) {
    if (start >= end) return;

    const mid = Math.floor((start + end) / 2);
    mergeSort(start, mid);
    mergeSort(mid + 1, end);
    merge(start, mid, end);
  }

  function merge(start, mid, end) {
    const left = temp.slice(start, mid + 1);
    const right = temp.slice(mid + 1, end + 1);
    let i = 0, j = 0, k = start;

    while (i < left.length && j < right.length) {
      steps.push({ type: "compare", indices: [k, k] });
      if (left[i] <= right[j]) {
        temp[k++] = left[i++];
      } else {
        temp[k++] = right[j++];
      }
    }

    while (i < left.length) {
      temp[k++] = left[i++];
    }

    while (j < right.length) {
      temp[k++] = right[j++];
    }
  }

  mergeSort(0, temp.length - 1);
  return steps;
}
