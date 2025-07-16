const StructureControls = ({ array, setArray, setInput, setLogs, type }) => {
  return (
    <>
      <button
        onClick={() => {
          const value = prompt("Enter value to push:");
          if (value !== null && value !== "") {
            const newVal = parseInt(value);
            if (!isNaN(newVal)) {
              const updatedArray = [...array, newVal];
              setArray(updatedArray);
              setInput(updatedArray.join(", "));
              setLogs((prev) => [...prev, `Pushed ${newVal}`]);
            }
          }
        }}
        className="flex-1 bg-green-600 text-white rounded-xl text-sm py-2 flex items-center justify-center gap-2"
      >
        ➕ Push
      </button>

      <button
        onClick={() => {
          let removed;
          if (type === "queue") {
            removed = array.shift();
            setArray([...array]);
            setLogs((prev) => [...prev, `Dequeued ${removed}`]);
          } else {
            removed = array.pop();
            setArray([...array]);
            setLogs((prev) => [...prev, `Popped ${removed}`]);
          }
          setInput(array.join(", "));
        }}
        className="flex-1 bg-red-600 text-white rounded-xl text-sm py-2 flex items-center justify-center gap-2"
      >
        ➖ {type === "queue" ? "Dequeue" : "Pop"}
      </button>
    </>
  );
};

export default StructureControls;

