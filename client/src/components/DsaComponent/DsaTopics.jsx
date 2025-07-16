// DataStructures.jsx
import React from "react";
import { BsList } from "react-icons/bs";
import StructureSection from "./StructureSection";



const Searching = [
  {
    icon: (
      <div className="text-orange-500 flex justify-center mb-4">
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </div>
    ),
    title: "Linear Search",
    time: "O(n)",
    desc: "Scan each element until match",
    color: "",
    path: "linearsearch",
  },
  {
    icon: (
      <div className="text-orange-500 flex justify-center mb-4">
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 21l-6-6" />
          <circle cx="11" cy="11" r="8" />
        </svg>
      </div>
    ),
    title: "Binary Search",
    time: "O(log n)",
    desc: "Divide sorted list and search",
    color: "",
    path: "binarysearch",
  },
  {
    icon: (
      <div className="text-orange-500 flex justify-center mb-4">
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v20M5 10l7-7 7 7" />
        </svg>
      </div>
    ),
    title: "DFS",
    time: "O(V + E)",
    desc: "Depth First Search on graph/tree",
    color: "",
    path: "dfs",
  },
  {
    icon: (
      <div className="text-orange-500 flex justify-center mb-4">
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      </div>
    ),
    title: "BFS",
    time: "O(V + E)",
    desc: "Breadth First Search with queue",
    path: "bfs",
  },
];

const Sorting = [
  {
    icon: (
      <div className="text-orange-500 flex justify-center mb-4">
        <svg
          width="50"
          height="50"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M4 6h16M4 12h10M4 18h4" />
        </svg>
      </div>
    ),
    title: "Bubble Sort",
    time: "O(n^2) worst-case",
    desc: "Compare and swap adjacent elements",
    color: "",
    path: "bubblesort",
  },
  {
    icon: (
      <div className="text-orange-500 flex justify-center mb-4">
        <svg
          width="50"
          height="50"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M6 3L18 12L6 21V3Z" />
        </svg>
      </div>
    ),
    title: "Quick Sort",
    time: "O(n log n) average",
    desc: "Divide and conquer using pivot",
    color: "",
    path: "quicksort",
  },
  {
    icon: (
      <div className="text-orange-500 flex justify-center mb-4">
        <svg
          width="50"
          height="50"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      </div>
    ),
    title: "Merge Sort",
    time: "O(n log n)",
    desc: "Divide, sort, merge recursively",
    color: "",
    path: "mergesort",
  },
  {
    icon: (
      <div className="text-orange-500 flex justify-center mb-4">
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 17l4-8 4 8 4-8 4 8" />
        </svg>
      </div>
    ),
    title: "Heap Sort",
    time: "O(n log n)",
    desc: "Build a heap and sort",
    color: "",
    path: "heapsort",
  },
  {
    icon: (
      <div className="text-orange-500 flex justify-center mb-4">
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 20L6 4M10 16L10 4M14 12L14 4M18 8L18 4" />
        </svg>
      </div>
    ),
    title: "Insertion Sort",
    time: "O(n^2)",
    desc: "Insert each element into sorted part",
    color: "",
    path: "insertionsort",
  },
  {
    icon: (
      <div className="text-orange-500 flex justify-center mb-4">
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 6h16M4 12h10M4 18h4" />
        </svg>
      </div>
    ),
    title: "Selection Sort",
    time: "O(n^2)",
    desc: "Select the minimum repeatedly",
    color: "",
    path: "selectionsort",
  },
];

const LinearStructures = [
  {
    icon: (
      <div className="text-4xl mb-4 text-orange-500 flex justify-center">
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
          <line x1="8" y1="4" x2="8" y2="20" />
          <line x1="16" y1="4" x2="16" y2="20" />
        </svg>
      </div>
    ),
    title: "Array",
    time: "O(1) access",
    desc: "Sequential collection of elements",
    color: "",
    path: "array",
  },
  {
    icon: (
      <div className="text-4xl mb-4 text-orange-500 flex justify-center">
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="6" cy="12" r="2" />
          <circle cx="18" cy="12" r="2" />
          <path d="M8 12h8" />
        </svg>
      </div>
    ),
    title: "Linked List",
    time: "O(n) search",
    desc: "Dynamic sequence with pointer connections",
    color: "",
    path: "linkedlist",
  },
  {
    icon: (
      <div className="text-4xl mb-4 text-orange-500 flex justify-center">
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="4" y="16" width="16" height="4" />
          <rect x="6" y="12" width="12" height="4" />
          <rect x="8" y="8" width="8" height="4" />
        </svg>
      </div>
    ),
    title: "Stack",
    time: "O(1) operations",
    desc: "Last In First Out (LIFO) structure",
    color: "",
    path: "stack",
  },
  {
    icon: (
      <div className="text-4xl mb-4 text-orange-500 flex justify-center">
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="5" cy="12" r="2" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="19" cy="12" r="2" />
        </svg>
      </div>
    ),
    title: "Queue",
    time: "O(1) operations",
    desc: "First In First Out (FIFO) structure",
    color: "",
    path: "queue",
  },
];

const TreeStructures = [
  {
    icon: (
      <div className="text-orange-500 flex justify-center mb-4">
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="4" r="2" />
          <path d="M12 6v4" />
          <circle cx="6" cy="12" r="2" />
          <circle cx="18" cy="12" r="2" />
          <path d="M6 14v6" />
          <path d="M18 14v6" />
          <path d="M12 10l-6 2" />
          <path d="M12 10l6 2" />
        </svg>
      </div>
    ),
    title: "Binary Tree",
    time: "O(1) access",
    desc: "Hierarchical structure with nodes",
    color: "",
    path: "binarytree",
  },
  {
    icon: (
      <div className="text-orange-500 flex justify-center mb-4">
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="4" r="2" />
          <path d="M12 6v4m0 0l-4 2m4-2l4 2" />
        </svg>
      </div>
    ),
    title: "BST",
    time: "O(log n) operations",
    desc: "Binary tree with ordered structure",
    color: "",
    path: "bst",
  },
  {
    icon: (
      <div className="text-orange-500 flex justify-center mb-4">
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="4" r="2" />
          <path d="M12 6v4m0 0l-3 2m3-2l3 2" />
          <path d="M9 14v6" />
          <path d="M15 14v6" />
        </svg>
      </div>
    ),
    title: "AVL Tree",
    time: "O(log n) operations",
    desc: "Self-balancing binary search tree",
    color: "",
    path: "avl",
  },
  {
    icon: (
      <div className="text-orange-500 flex justify-center mb-4">
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 17l4-8 4 8 4-8 4 8" />
        </svg>
      </div>
    ),
    title: "Heap",
    time: "O(log n) operations",
    desc: "Complete binary tree used in priority queue",
    color: "",
    path: "heap",
  },
];

const GraphStructures = [
  {
    icon: (
      <div className="text-orange-500 flex justify-center mb-4">
        {/* Undirected Graph */}
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="6" cy="12" r="2" />
          <circle cx="18" cy="12" r="2" />
          <path d="M6 12L18 12" />
        </svg>
      </div>
    ),
    title: "Undirected Graph",
    time: "O(V + E) traversal",
    desc: "Edges have no direction",
    path: "undirected",
  },
  {
    icon: (
      <div className="text-orange-500 flex justify-center mb-4">
        {/* Directed Graph */}
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="6" cy="12" r="2" />
          <circle cx="18" cy="12" r="2" />
          <path d="M6 12L18 12" />
          <path d="M15 9l3 3-3 3" />
        </svg>
      </div>
    ),
    title: "Directed Graph",
    time: "O(V + E) traversal",
    desc: "Edges have direction from one node to another",
    path: "directed",
  },
  {
    icon: (
      <div className="text-orange-500 flex justify-center mb-4">
        {/* Weighted Graph */}
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="6" cy="6" r="2" />
          <circle cx="18" cy="6" r="2" />
          <path d="M6 6L18 6" />
          <text x="11" y="5" fontSize="4" fill="currentColor">5</text>
        </svg>
      </div>
    ),
    title: "Weighted Graph",
    time: "O(E log V)",
    desc: "Each edge carries a weight (cost/distance)",
    path: "weighted",
  },
];


const DsaTopics = () => {
  return (
    <div className=" text-white pb-5 ">
      <StructureSection
        title="Linear Structures"
        dataStructures={LinearStructures}
      />
      <StructureSection
        title="Tree Structures"
        dataStructures={TreeStructures}
      />
      <StructureSection title="Sorting Algorithms" 
      dataStructures={Sorting} 
      />
      <StructureSection
        title="Searching Algorithms"
        dataStructures={Searching}
      />
      <StructureSection
        title="Graph Structures"
        dataStructures={GraphStructures}
      />
    </div>
    
  );
};

export default DsaTopics;
