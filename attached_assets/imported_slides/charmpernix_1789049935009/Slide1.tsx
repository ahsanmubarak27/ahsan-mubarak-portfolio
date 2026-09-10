import React, { useState, useEffect, useRef } from "react";
const Slide1: React.FC = () => {
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
  return <div id="slide-1" ref={outerRef} className="w-screen h-screen overflow-hidden relative" style={{
    backgroundColor: "#000"
  }}><div id="slide-inner-1" style={{
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
        left: "48px",
        top: "128.6px",
        width: "471.12px",
        height: "237.54px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "9.6px 9.6px 9.6px 9.6px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.08",
          fontSize: "calc(50pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(50pt * var(--pptx-font-scale, 1))",
            fontFamily: "Montserrat, 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#000000"
          }}>{"Analisis Kinerja Penjualan"}</span></p></div><div key={1} style={{
        position: "absolute",
        left: "48px",
        top: "366.14px",
        width: "471.12px",
        height: "45.26px",
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
            fontWeight: "700",
            color: "#000000"
          }}>{"By Ahsan Mubarak"}</span></p><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))"
          }}>{"\xA0"}</span></p></div><div key={2} style={{
        position: "absolute",
        left: "537.78px",
        top: "128.6px",
        width: "285.83px",
        height: "282.8px"
      }}><div key={0} style={{
          position: "absolute",
          left: "101.64px",
          top: "65.74px",
          width: "16.83px",
          height: "16.84px",
          boxSizing: "border-box",
          backgroundColor: "#000000",
          clipPath: "path('M 8.41 0 C 3.83 0 0 3.83 0 8.42 C 0 13.01 3.83 16.84 8.41 16.84 C 13 16.84 16.81 13.01 16.81 8.42 C 16.81 3.83 13 0 8.41 0 Z')"
        }} /><div key={1} style={{
          position: "absolute",
          left: "51.96px",
          top: "132.98px",
          width: "16.83px",
          height: "16.84px",
          boxSizing: "border-box",
          backgroundColor: "#000000",
          clipPath: "path('M 8.41 0.02 C 3.83 0.02 0 3.83 0 8.42 C 0 13.01 3.83 16.84 8.41 16.84 C 13 16.84 16.81 13.01 16.81 8.42 C 16.81 3.83 13 0.02 8.41 0.02 Z')"
        }} /><div key={2} style={{
          position: "absolute",
          left: "168.13px",
          top: "115.42px",
          width: "17.59px",
          height: "16.84px",
          boxSizing: "border-box",
          backgroundColor: "#000000",
          clipPath: "path('M 8.42 0 C 3.83 0 0 3.83 0 8.42 C 0 13.01 3.83 16.82 8.42 16.82 C 13.76 16.82 17.59 13.01 17.59 8.42 C 17.59 3.83 13.76 0 8.42 0 Z')"
        }} /><div key={3} style={{
          position: "absolute",
          left: "0px",
          top: "199.48px",
          width: "283.55px",
          height: "33.65px",
          boxSizing: "border-box",
          backgroundColor: "#000000",
          clipPath: "path('M 0 0.02 L 0 8.42 L 1.53 8.42 C 1.53 22.17 12.23 33.65 25.98 33.65 L 259.07 33.65 C 272.83 33.65 283.52 22.17 283.52 8.42 L 283.52 0.02 Z')"
        }} /><div key={4} style={{
          position: "absolute",
          left: "63.41px",
          top: "249.93px",
          width: "156.7px",
          height: "32.87px",
          boxSizing: "border-box",
          backgroundColor: "#000000",
          clipPath: "path('M 36.7 0 L 32.89 16.81 L 11.5 16.81 C 0.78 16.81 0.02 32.87 11.5 32.87 L 143.7 32.87 C 156.68 32.87 156.68 16.81 145.23 16.81 L 123.05 16.81 L 119.25 0 Z')"
        }} /><div key={5} style={{
          position: "absolute",
          left: "217.78px",
          top: "49.68px",
          width: "17.61px",
          height: "16.84px",
          boxSizing: "border-box",
          backgroundColor: "#000000",
          clipPath: "path('M 8.44 0.02 C 3.83 0.02 0.02 3.83 0.02 8.42 C 0.02 13.01 3.83 16.84 8.44 16.84 C 13.78 16.84 17.61 13.01 17.61 8.42 C 17.61 3.83 13.78 0.02 8.44 0.02 Z')"
        }} /><div key={6} style={{
          position: "absolute",
          left: "2.28px",
          top: "0px",
          width: "283.55px",
          height: "182.69px",
          boxSizing: "border-box",
          backgroundColor: "#000000",
          clipPath: "path('M 223.95 32.12 C 237.7 32.12 249.15 43.59 249.15 57.35 C 249.15 70.88 238.26 82.26 224.31 82.26 C 221.72 82.26 219.03 81.87 216.28 81.05 L 194.89 110.09 C 206.36 126.12 193.36 149.04 173.49 149.04 C 157.46 149.04 145.23 133.76 149.82 116.2 L 120.76 94.8 C 117.38 97.2 113.07 98.71 108.43 98.71 C 105.74 98.71 102.93 98.2 100.14 97.08 L 77.96 126.12 C 81.02 129.95 81.8 134.54 81.8 139.12 C 81.8 152.88 70.32 164.35 57.32 164.35 C 43.57 164.35 32.12 152.88 32.12 139.12 C 32.12 126.12 43.57 114.67 57.32 114.67 C 60.38 114.67 61.9 115.42 64.96 115.42 L 87.13 87.16 C 75.69 70.32 87.91 47.4 107.78 47.4 C 123.81 47.4 136.81 62.68 131.45 80.27 L 160.51 102.44 C 164.13 99.85 168.81 97.95 173.81 97.95 C 176.21 97.95 178.66 98.39 181.13 99.39 L 203.31 70.32 C 200.25 66.52 199.47 61.93 199.47 57.35 C 199.47 43.59 210.95 32.12 223.95 32.12 Z M 24.48 0.02 C 11.48 0.02 0.03 11.5 0.03 24.48 L 0.03 182.69 L 283.55 182.69 L 283.55 24.48 C 282.77 9.97 271.32 0.02 257.57 0.02 Z')"
        }} /></div></div></div>;
};
export default Slide1;
