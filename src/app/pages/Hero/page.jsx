import Framer from "../../components/framerMotion/index";
import React from "react";

function Home() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <span
        style={{
          fontSize: "6rem",
          color: "#333",
          fontWeight: "bold",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          right: "10px",
          marginTop: "2rem",
          marginBottom: "2rem",
          padding: "1rem",
          margin: "auto",
          textAlign: "center",
          lineHeight: "1.5",
          overflow: "hidden",
          position: "relative",
          zIndex: "1",
          overflowX: "hidden",
          overflowY: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          wordBreak: "break-word",
          wordWrap: "break-word",
          hyphens: "auto",
          cursor: "pointer",
          userSelect: "none",
          pointerEvents: "none",
          transition: "all 0.3s ease-in-out",
          animation: "fade-in 1s ease-in-out",
          animationFillMode: "both",
          animationTimingFunction: "ease-in-out",
          animationIterationCount: "infinite",
          animationDirection: "alternate",
          animationPlayState: "running",
          animationDuration: "1s",
          animationName: "fade-in",
          animationDelay: "0s",
          animationFillMode: "both",
          animationTimingFunction: "ease-in-out",
          animationIterationCount: "infinite",
          animationDirection: "alternate",
          animationPlayState: "running",
          animationDuration: "1s",
          animationName: "fade-in",
          animationDelay: "0s",
        }}
      >
        {" "}
        <Framer type="hero" text="Vishnu Viswanath" />
      </span>
    </div>
  );
}

export default Home;
