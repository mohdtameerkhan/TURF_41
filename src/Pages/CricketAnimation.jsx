import React from "react";
import ball from "../assets/ball.png";
export default function CricketAnimation() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">

      {/* Ball 1 */}
      <img
        src={ball}
        className="w-14 absolute animate-moveAround"
      />

      {/* Ball 2 (optional) */}
      <img
        src={ball}
        className="w-10 absolute animate-moveAround"
        style={{ animationDuration: "8s", top: "20%", left: "30%" }}
      />

      {/* Ball 3 (optional) */}
      <img
        src={ball}
        className="w-12 absolute animate-moveAround"
        style={{ animationDuration: "10s", top: "50%", left: "70%" }}
      />
      
    </div>
  );
}
