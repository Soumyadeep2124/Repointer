import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";

export const chapters = [
  {
    title: "Introduction",
    videos: [
      { name: "Introduction to programming for beginners", url: "https://www.youtube.com/embed/y3OOaXrFy-Q?si=3MbtpVjG5dq5ra8H", description: "Course introduction and expectations." },
      { name: "Introduction to flowchart and pseudocode", url: "https://www.youtube.com/embed/H_9MSvTL74g?si=F5-Y34lorr_RsLbt", description: "Basics of Data Structures and Algorithms." },
    ]
  },
  {
    title: "C++ basics",
    videos: [
      { name: "C++ Start", url: "https://www.youtube.com/embed/2Gexv2eld4Y?si=68Jm_Fi8rev7GIQI", description: "Understanding variables in C++." },
      { name: "If else, Foe loop", url: "https://www.youtube.com/embed/gGaJJovz-4k?si=BO0MoDhA_INI9dz5", description: "If, else, and loop basics." },
      { name: "Loop Advance", url: "https://www.youtube.com/embed/7qINbIQK_J8?si=4ML6gjI4-spQaksA", description: "How functions work in C++." },
      { name: "What is Operator", url: "https://www.youtube.com/embed/HI0mNthclGE?si=qS-KZdruCKcEpiZn", description: "How functions work in C++." },
      { name: "While, Do while, Switch", url: "https://www.youtube.com/embed/kYbTxu1_H-o?si=Cyw_qtpIH1cz7DOr", description: "How functions work in C++." },
      { name: "What is Functions", url: "https://www.youtube.com/embed/PnSgN5WOUC0?si=coe59ui_6qrFJSUc", description: "How functions work in C++." },

    ]
  },
  {
    title: "Pattern Printing problems",
    videos: [
      { name: "Pattern printing 1", url: "https://www.youtube.com/embed/7qINbIQK_J8?si=iBsuqzdq4IetzuCx", description: "Simple star patterns." },
      { name: "Pattern printing 2", url: "https://www.youtube.com/embed/0LawAwK5OaI?si=a5sQLxacXGrbE1jr", description: "Pattern using numbers." },
      { name: "Pattern printing 3", url: "https://www.youtube.com/embed/-o6MPFfGipU?si=bV7ewNvpZ7gn3Cfy", description: "Advanced pattern problem." },
      { name: "Pattern printing 4", url: "https://www.youtube.com/embed/mtQwWAxWbDY?si=LRHaGjCajk0xA3oi", description: "Advanced pattern problem." },
      { name: "Pattern printing 5", url: "https://www.youtube.com/embed/CaLtCuji8z0?si=xipxSov6cedV4cKl", description: "Advanced pattern problem." },

    ]
  },
  {
    title: "Array",
    videos: [
      { name: "Intro to Arrays", url: "https://www.youtube.com/embed/moZNKL37w-s?si=-WdKwkAyylAGNFgh", description: "Declaring and using arrays." },
      { name: "Array problems", url: "https://www.youtube.com/embed/567332frcF0?si=YF1CEaUPK_ommFP5", description: "Looping through arrays." },
      { name: "Time and Space Complexity", url: "https://www.youtube.com/embed/hUdqNPhXOh4?si=8nsMCaZ0W4ULgqoj", description: "Important problems on arrays." }
    ]
  },
  {
    title: "Sorting Algorithms",
    videos: [
      { name: "Selection Sort", url: "https://www.youtube.com/embed/9_B6TmAHveU?si=7cXSFclHmrLyEtBN", description: "Learn Selection Sort." },
      { name: "Bubble Sort", url: "https://www.youtube.com/embed/V3vM_m2iFtk?si=1s9OqZTn3aHP1kzh", description: "Learn Merge Sort." },
      { name: "Insertion Sort", url: "https://www.youtube.com/embed/YpZUgiT1N94?si=BfowEytRSp-S6RQP", description: "Learn Merge Sort." },
      { name: "Quick Sort", url: "https://www.youtube.com/embed/iVj8uyd50f4?si=5-TGdV0SnxGk5-3e", description: "Learn Merge Sort." },
      { name: "Merge Sort", url: "https://www.youtube.com/embed/86HOPLCgc00?si=9SpOlFvkwdofFbdX", description: "Learn Merge Sort." },
    ]
  },
  {
    title: "String",
    videos: [
      { name: "Introduction to Strings", url: "https://www.youtube.com/embed/FkaIZAQKmWU?si=xE943YutnZoIMuL2", description: "Understanding strings." },
      { name: "String Interview Problems 1", url: "https://www.youtube.com/embed/BCHJ9YizW7w?si=9uzeAVflx2cz_yds", description: "Important string functions." },
      { name: "String Interview Problems 2", url: "https://www.youtube.com/embed/U1OZQl1fU7g?si=IptcB9IA1EtsYRH9", description: "Solving problems on strings." }
    ]
  },
  {
    title: "Advance String",
    videos: [
      { name: "Intro to Sliding Window", url: "https://www.youtube.com/embed/swBjx46TSP4?si=_oIsn6mPEqJ2-b4i", description: "Concept of sliding window." },
      { name: "KMP Algorithms", url: "https://www.youtube.com/embed/sODA1BzFvsE?si=y58DtoQlJJgHuY8Y", description: "Problems with fixed window." },
      { name: "Strings Hard problems", url: "https://www.youtube.com/embed/VB-tDA9TOq0?si=hVhr2YP3UxMzQp69", description: "Using variable length window." }
    ]
  },
  {
    title: "Pointer",
    videos: [
      { name: "Pointers in C++", url: "https://www.youtube.com/embed/EUPirt55uY4?si=9rHIfosCpvrqp7bi", description: "Understanding pointers." },
      { name: "Pointer relationship with Array", url: "https://www.youtube.com/embed/KA3XnH6eYpY?si=I3j3mz461M9zrlGb", description: "Working with pointer math." },
      { name: "Double pointer", url: "https://www.youtube.com/embed/j2GInxA3HpI?si=XLXkgAkFndqU-AzS", description: "Pointer with arrays." }
    ]
  },
  {
    title: "Recursion",
    videos: [
      { name: "What is Recursion", url: "https://www.youtube.com/embed/j_n1W5YgN_4?si=BK0LxnqVHvldg3fh", description: "Basics of recursion." },
      { name: "Recursive problems", url: "https://www.youtube.com/embed/LLsIA8U3z18?si=NHnG83qCEg6KFT02", description: "Visualizing recursion." },
      { name: "Time and space complexity in recursion", url: "https://www.youtube.com/embed/2Ekun-ocGnQ?si=pmAExcg2asUtLVrv", description: "Backtracking in recursion." }
    ]
  },
  {
    title: "OOPs",
    videos: [
      { name: "OOP Introduction", url: "https://www.youtube.com/embed/iw1Xf_33YM0?si=9TNJ3_x5x-9cZEld", description: "Object-Oriented Programming Basics." },
      { name: "Constructor and destructor", url: "https://www.youtube.com/embed/sNiiJ16dLz0?si=-pjj4l_t89F1IDg1", description: "OOP principles." },
      { name: "Inheritance", url: "https://www.youtube.com/embed/qq3BY4viEB4?si=iYhC4EoGVCNaeY18", description: "OOP examples." }
    ]
  },
  {
    title: "Linkedlist",
    videos: [
      { name: "Intro to Linked List", url: "https://www.youtube.com/embed/CE150x4w0bo?si=B5hUIMtgNuzEFW1A", description: "Basics of linked list." },
      { name: "Deletion in singly linked list", url: "https://www.youtube.com/embed/tLeSDFqch3I?si=2WFRZ7S3PPn-vubi", description: "Insertion and deletion in linked list." },
      { name: "Reverse Linkedlist", url: "https://www.youtube.com/embed/xcm3srdOQ0w?si=oSZTbfphVSysXKZ2", description: "Reversing a linked list." }
    ]
  },
  {
    title: "Stack",
    videos: [
      { name: "Stack Introduction", url: "https://www.youtube.com/embed/xcm3srdOQ0w?si=oSZTbfphVSysXKZ2", description: "Understanding stacks." },
      { name: "Stack Problems 1", url: "https://www.youtube.com/embed/abQZotIl70g?si=M1U0_zZml1F8HxIL", description: "Introduction to queues." },
      { name: "Stack Problems 2", url: "https://www.youtube.com/embed/8dwjKE9GM30?si=-eDzZtfw38fdfASy", description: "Important stack questions." }
    ]
  },
  {
    title: "Queue",
    videos: [
      { name: "Queue Introduction", url: "https://www.youtube.com/embed/Ah-ZDJf9QW0?si=KDYZRBIZu4bf9QtR", description: "Understanding stacks." },
      { name: "Queue Problems 1", url: "https://www.youtube.com/embed/MuDF9Yh8y4w?si=LZrU2H2bsYkA00WQ", description: "Introduction to queues." },
      { name: "Queue Problems 2", url: "https://www.youtube.com/embed/pe-q_7EfFPk?si=aEQdvxY70IY2rcJ6", description: "Important stack questions." }
    ]
  },
  {
    title: "Tree",
    videos: [
      { name: "Intro to Trees", url: "https://www.youtube.com/embed/_b0bfpO3b4I?si=cY-LVluHvFtuyixY", description: "Understanding binary trees." },
      { name: "Binary Tree", url: "https://www.youtube.com/embed/aBqPnkXmvpY?si=V3CwdgO0NJamQv8b", description: "Inorder, Preorder, Postorder." },
      { name: "Binary Search Tree", url: "https://www.youtube.com/embed/pMHXL46exp4?si=UrwZ2-4Q6e6CzdFv", description: "Learn BST." },
      { name: "AVL Tree", url: "https://www.youtube.com/embed/Sxb152a5Am8?si=zGzMa2Eg1YLXX9Jn", description: "Learn BST." }

    ]
  },
  {
    title: "Heap",
    videos: [
      { name: "Heap Basics", url: "https://www.youtube.com/embed/ilz-VZBz5Vg?si=c2gbNdTbpQ95ldYh", description: "Intro to heaps." },
      { name: "Heap problems 1", url: "https://www.youtube.com/embed/XePjO6Q8FDE?si=bUlXSK-fXK7DvxVCY", description: "Difference between min and max heap." },
      { name: "Heap problems 2", url: "https://www.youtube.com/embed/-2_sXN4IkE4?si=5buorl9c64-FvQsG", description: "Insert and delete in heaps." }
    ]
  },
  {
    title: "Graph",
    videos: [
      { name: "Intro to Graphs", url: "https://www.youtube.com/embed/gGlfzqPT-hE?si=g7FfIPM1i17KsTkW", description: "Basics of graph theory." },
      { name: "DFS & BFS", url: "https://www.youtube.com/embed/Vtu7qgF0ksw?si=7QMGFMOofvLAJ06D", description: "Depth and Breadth First Search." },
      { name: "Floyid Warshall Algorithm", url: "https://www.youtube.com/embed/h6o6kC5oG2A?si=2J3XgBQYM2ergEI4", description: "Common graph problems." },
      { name: "Prims Algorithms", url: "https://www.youtube.com/embed/60WK9IFnFrg?si=SNYybTTitjiJrz0C", description: "Common graph problems." },
      { name: "Kruskal Algorithm", url: "https://www.youtube.com/embed/sCXQAXD2e_U?si=k67UAZ9tI3FvRKOj", description: "Common graph problems." }


    ]
  },
  {
    title: "Dynamic Programming",
    videos: [
      { name: "DP Intro", url: "https://www.youtube.com/embed/_kio3U6CV2c?si=IWwT8h2EhnokgX68", description: "Why and what is DP." },
      { name: "DP practice 1", url: "https://www.youtube.com/embed/jE3Kh3BARdM?si=Fddnavh4x2aVAceYY", description: "Memoization vs tabulation." },
      { name: "DP Practice 2", url: "https://www.youtube.com/embed/4uf8BDbMTdE?si=pAhwRP8QJXpZB2RU", description: "Classic DP problems." }
    ]
  }
];


const ChapterSection = ({ setVideoData }) => {
  const [expandedChapter, setExpandedChapter] = useState(null);

  return (
    <div className="w-80 bg-[#1b1e2c] p-5 rounded-lg">
      {chapters.map((chapter, index) => (
        <div key={index} className="mb-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setExpandedChapter(expandedChapter === index ? null : index)}
          >
            <h2 className="text-sm font-medium">{chapter.title}</h2>
            <FaChevronDown
              className={`transition-transform duration-300 ${
                expandedChapter === index ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
          {expandedChapter === index && (
            <ul className="mt-2 space-y-2 text-sm">
              {chapter.videos.map((video, vidIndex) => (
                <li
                  key={vidIndex}
                  onClick={() =>
                    setVideoData({
                      url: video.url,
                      title: video.name,
                      description: video.description
                    })
                  }
                  className="bg-[#26293a] p-2 rounded flex items-center gap-2 cursor-pointer hover:bg-[#31364a]"
                >
                  <FaPlayCircle className="text-orange-500" />
                  {video.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default ChapterSection;

