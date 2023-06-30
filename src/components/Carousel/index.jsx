import { useEffect, useState } from "react";

export default function Carousel({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timerId, setTimerId] = useState(null);

  const startTimer = () => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % children.length);
    }, 1000);
    setTimerId(id);
    return id;
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(timerId);
    };
  }, []);

  const incrementSlide = function () {
    clearInterval(timerId);
    setCurrentIndex((prev) => (prev + 1) % children.length);
    startTimer();
  };
  const decrementSlide = function () {
    clearInterval(timerId);
    setCurrentIndex((prev) => (children.length + prev - 1) % children.length);
    startTimer();
  };

  return (
    <div>
      <div
        className="slide"
        onMouseOver={() => clearInterval(timerId)}
        onMouseLeave={startTimer}
        style={{
          width: "500px",
          height: "200px",
          padding: "30px",
          background: "lightblue",
        }}
      >
        {children[currentIndex]}
      </div>
      <div style={{ marginTop: "20px" }}>
        <button onClick={decrementSlide}>Previous</button>
        <button onClick={incrementSlide}>Next</button>
      </div>
    </div>
  );
}
