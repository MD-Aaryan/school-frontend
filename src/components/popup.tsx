import { useEffect, useState } from "react";
import { X } from "lucide-react";
import Navbar from "../layouts/mainLayout";
import card from "../assets/card.png";

const FirstTimePopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");

    if (!hasSeenPopup) {
      setShowPopup(true);
      sessionStorage.setItem("hasSeenPopup", "true");
    }
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowPopup(false);
      setIsClosing(false);
    }, 200);
  };

  return (
    <div className="relative">
      <div
        className={showPopup ? "blur-sm pointer-events-none select-none" : ""}
      >
        <Navbar />
      </div>

      {showPopup && (
        <div
          className={`fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-50 px-4 ${
            isClosing ? "fadeOut" : "fadeIn"
          }`}
        >
          <div
            className={`relative w-full max-w-md ${
              isClosing ? "slideDown" : "slideUp"
            }`}
          >
            <button
              className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center transition"
              onClick={handleClose}
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={card}
              alt="75 Years Anniversary Popup"
              className="rounded-2xl shadow-2xl w-full h-auto object-contain max-h-[90vh]"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FirstTimePopup;
