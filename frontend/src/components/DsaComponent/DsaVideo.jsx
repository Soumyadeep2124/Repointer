import { useState } from "react";
import { PlayCircle } from "lucide-react";

const videoMap = {
  bubblesort: "https://www.youtube.com/embed/V3vM_m2iFtk?si=OZ6gtyQLS4u2IG2v",
  quicksort: "https://www.youtube.com/embed/iVj8uyd50f4?si=8cVO5DWWhQwKyLdi",
  mergesort: "https://www.youtube.com/embed/86HOPLCgc00?si=yYJbbBSrDylT3wm3",
  selectionsort: "https://www.youtube.com/embed/9_B6TmAHveU?si=523KreuONbHkDhIH",
  insertionsort: "https://www.youtube.com/embed/YpZUgiT1N94?si=F7tec0Blk9jjTW21",
  heapsort: "https://www.youtube.com/embed/kcGENCHENgY?si=vWPostWeQrqDTpDM",
  linearsearch: "https://www.youtube.com/embed/567332frcF0?si=BpkebRj5cUy9FR9c",
  binarysearch: "https://www.youtube.com/embed/0Hwpzd-bSck?si=HKu3LGsTfEPbjHQe",
  stack: "https://www.youtube.com/embed/ZOS1fKa_WUY?si=aV1ZCI3Xe__zUduX",
  queue: "https://www.youtube.com/embed/Ah-ZDJf9QW0?si=IIBCr-XVrQDjpnDj",
  array: "https://www.youtube.com/embed/Ah-ZDJf9QW0?si=IIBCr-XVrQDjpnDj",
  linkedlist: "https://www.youtube.com/embed/CE150x4w0bo?si=xkd2V4kJxOTYCtuG",
};

export default function DsaVideo({ type }) {
  const [showVideo, setShowVideo] = useState(false);
  const videoUrl = videoMap[type];

  return (
    <div
      className="col-span-2 bg-gradient-to-br from-[#1e1f29] to-[#0f111c] rounded-2xl shadow-[0_0_20px_2px_rgba(251,146,60,0.15)] hover:shadow-[0_0_25px_4px_rgba(251,146,60,0.25)] transition-shadow duration-300 cursor-pointer"
      onClick={() => setShowVideo(true)}
    >
      {showVideo && videoUrl ? (
        <div className="w-full h-[vh] sm:h-[34vh] transition-all duration-300 ease-in-out">
          <iframe
            className="w-full h-full rounded-l border border-white/10"
            src={videoUrl}
            title="YouTube Video Tutorial"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center transition-opacity duration-300 ease-in-out pt-[5vh]">
          <PlayCircle className="w-20 h-20 text-orange-500 animate-pulse" />
          <p className="text-orange-400 text-2xl font-bold pt-10">Start Watching</p>
          <p className="text-gray-400 text-l">Click to load the video tutorial</p>
        </div>
      )}
    </div>
  );
}


