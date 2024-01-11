import { useState } from "react";
import { FaBuffer, FaCalendar } from "react-icons/fa";

const Content = ({fullText}) => {
    const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const displayedText = showFullText ? fullText : `${fullText.slice(0, 30)}...`;


  return (
    <div className="flex  justify-between my-4">
          <div className="my-2 flex  gap-2">
            <div>
              <FaBuffer className="text-xl mt-1" />
            </div>
            <p onClick={toggleText} className="cursor-pointer">
              {displayedText}
            </p>
          </div>
          <div className="flex gap-2 bg-slate-100  px-3">
            <FaCalendar className="mt-3" />
            <p className="mt-2">{showFullText ? "2/2" : "1/2"}</p>
          </div>
        </div>
  )
}

export default Content