import React, { useState, useEffect, useRef } from "react";
import img_1 from "./assets/images/image_1.png";
const Slide4: React.FC = () => {
  const outerRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState({
    s: 1,
    x: 0,
    y: 0
  });
  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;
    const update = () => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      const s = Math.min(w / 960, h / 540);
      setLayout({
        s,
        x: (w - 960 * s) / 2,
        y: (h - 540 * s) / 2
      });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return <div id="slide-4" ref={outerRef} className="w-screen h-screen overflow-hidden relative" style={{
    backgroundColor: "#000"
  }}><div id="slide-inner-4" style={{
      position: "absolute",
      width: "960px",
      height: "540px",
      overflow: "hidden",
      transformOrigin: "top left",
      color: "#000000",
      backgroundColor: "#ffffff",
      transform: `scale(${layout.s})`,
      left: layout.x + "px",
      top: layout.y + "px"
    }}><div key={0} style={{
        position: "absolute",
        left: "47.51px",
        top: "43.2px",
        width: "864.98px",
        height: "58.96px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "9.6px 9.6px 9.6px 9.6px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "center",
          lineHeight: "1.2",
          fontSize: "calc(24pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(24pt * var(--pptx-font-scale, 1))",
            fontFamily: "Montserrat, 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#000000"
          }}>{"CLV Category Distribution "}</span></p></div><img key={1} src={img_1} alt="Google Shape;65;p8" style={{
        position: "absolute",
        left: "24.8px",
        top: "137.79px",
        width: "498px",
        height: "347.43px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /><div key={2} style={{
        position: "absolute",
        left: "522.8px",
        top: "137.79px",
        width: "437.2px",
        height: "200.38px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "9.6px 9.6px 9.6px 9.6px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "Montserrat, 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "500",
            color: "#000000"
          }}>{"Insight:"}</span></p><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          textIndent: "-34.67px",
          paddingLeft: "48px",
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            marginRight: "8px",
            color: "#000000",
            fontSize: "16pt"
          }}>{"\u25CF"}</span><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "Montserrat, 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "500",
            color: "#000000"
          }}>{"The CLV values are tightly clustered between 86 and 89, indicating limited variation across customers. This suggests segmentation based on small behavioral differences."}</span></p></div></div></div>;
};
export default Slide4;
