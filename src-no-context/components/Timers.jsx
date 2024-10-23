import { useEffect } from "react";

function Timer({ dispatch, timesRemaining }) {
  const mins = timesRemaining / 60;
  const seconds = timesRemaining % 60;
  useEffect(
    function () {
      const interval = setInterval(() => {
        dispatch({ type: "timer" });
      }, 1000);

      // Bersihkan interval saat komponen di-unmount
      return () => clearInterval(interval);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {`${Math.floor(mins) < 10 ? "0" : ""}${Math.floor(mins)} : ${
        seconds < 10 ? "0" : ""
      }${seconds}`}
    </div>
  );
}

export default Timer;
