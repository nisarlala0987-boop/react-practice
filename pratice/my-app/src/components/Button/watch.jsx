// import React, { useState, useEffect } from "react";

// export default function Watch() {
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setSeconds((prev) => prev + 1);
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const hours = Math.floor(seconds / 3600);
//   const minutes = Math.floor((seconds % 3600) / 60);
//   const secs = seconds % 60;

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1 style={{ fontSize: "48px", fontFamily: "monospace" }}>
//         {hours.toString().padStart(2, "0")}:
//         {minutes.toString().padStart(2, "0")}:
//         {secs.toString().padStart(2, "0")}
//       </h1>
//       <button onClick={() => setSeconds(0)} style={{ padding: "10px 20px", fontSize: "16px" }}>
//         Reset
//       </button>
//     </div>
//   );
// }