import { getBubbleSortSteps } from "../components/DsaComponent/BubbleSort";
import { getQuickSortSteps } from "../components/DsaComponent/Sorting/QuickSort";
import { getMergeSortSteps } from "../components/DsaComponent/Sorting/MergeSort";
import { getHeapSortSteps } from "../components/DsaComponent/Sorting/HeapSort";
import { getInsertionSortSteps } from "../components/DsaComponent/Sorting/InsertionSort";
import { getSelectionSortSteps } from "../components/DsaComponent/Sorting/SelectionSort";
import { getLinearSearchSteps } from "../components/DsaComponent/Sorting/LinearSearch";
import { getBinarySearchSteps } from "../components/DsaComponent/Sorting/BinarySearch";

// Future implementations will have null for now
const notImplemented = {
  getSteps: () => [],
  timeComplexity: "N/A",
  spaceComplexity: "N/A",
};

const dsaConfigMap = {
  bubblesort: {
    label: "Bubble Sort",
    getSteps: (array) => getBubbleSortSteps(array),
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
  },

  quicksort: {
    label: "Quick Sort",
    getSteps: (array) => getQuickSortSteps(array),
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(log n)",
  },

  mergesort: {
    label: "Merge Sort",
    getSteps: (array) => getMergeSortSteps(array),
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(n)",
  },

  heapsort: {
    label: "Heap Sort",
    getSteps: (array) => getHeapSortSteps(array),
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(1)",
  },

  insertionsort: {
    label: "Insertion Sort",
    getSteps: (array) => getInsertionSortSteps(array),
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
  },

  selectionsort: {
    label: "Selection Sort",
    getSteps: (array) => getSelectionSortSteps(array),
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
  },

  linearsearch: {
    label: "Linear Search",
    getSteps: (array, target) => getLinearSearchSteps(array, target),
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
  },

  binarysearch: {
    label: "Binary Search",
    getSteps: (array, target) => getBinarySearchSteps(array, target),
    requiresSort: true,
    timeComplexity: "O(log n)",
    spaceComplexity: "O(1)",
  },

  // Data Structures (not yet implemented)
  array: {
    label: "Array",
    ...notImplemented,
  },

  linkedlist: {
    label: "Linked List",
    ...notImplemented,
  },

  stack: {
    label: "Stack",
    ...notImplemented,
  },

  queue: {
    label: "Queue",
    ...notImplemented,
  },

  binarytree: {
    label: "Binary Tree",
    ...notImplemented,
  },

  bst: {
    label: "Binary Search Tree",
    ...notImplemented,
  },

  avl: {
    label: "AVL Tree",
    ...notImplemented,
  },

  dfs: {
    label: "DFS",
    ...notImplemented,
  },

  bfs: {
    label: "BFS",
    ...notImplemented,
  },

  directed: {
    label: "Directed Graph",
    ...notImplemented,
  },

  undirected: {
    label: "Undirected Graph",
    ...notImplemented,
  },

  weighted: {
    label: "Weighted Graph",
    ...notImplemented,
  },
};

export default dsaConfigMap;

