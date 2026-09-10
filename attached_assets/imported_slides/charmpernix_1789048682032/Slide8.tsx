import React, { useState, useEffect, useRef } from "react";
import img_1 from "./assets/images/image_5.png";
const Slide8: React.FC = () => {
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
  return <div id="slide-8" ref={outerRef} className="w-screen h-screen overflow-hidden relative" style={{
    backgroundColor: "#000"
  }}><div id="slide-inner-8" style={{
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
        left: "123.51px",
        top: "43.2px",
        width: "588.94px",
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
          }}>{"Pola Penjualan Berdasarkan Hari"}</span></p></div><div key={1} style={{
        position: "absolute",
        left: "548.35px",
        top: "102.16px",
        width: "411.65px",
        height: "381.39px",
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
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))"
          }}>{"\xA0"}</span></p><p style={{
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
          }}>{"Penjualan cenderung meningkat menjelang akhir pekan"}</span></p><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          paddingLeft: "48px",
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))"
          }}>{"\xA0"}</span></p><p style={{
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
          }}>{"Weekend & pre-weekend adalah momentum utama"}</span></p><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          paddingLeft: "48px",
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))"
          }}>{"\xA0"}</span></p><p style={{
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
          }}>{"Terdapat penurunan aktivitas pembelian di pertengahan minggu (Rabu)"}</span></p><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          paddingLeft: "48px",
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))"
          }}>{"\xA0"}</span></p><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))"
          }}>{"\xA0"}</span></p></div><img key={2} src={img_1} alt="Google Shape;120;g3bf2712b5b6_0_53" style={{
        position: "absolute",
        left: "0px",
        top: "102.16px",
        width: "548.35px",
        height: "437.84px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /><div key={3} style={{
        position: "absolute",
        left: "704.56px",
        top: "43.2px",
        width: "59.12px",
        height: "58.96px"
      }}><div key={0} style={{
          position: "absolute",
          left: "10.65px",
          top: "10.65px",
          width: "37.67px",
          height: "37.67px",
          boxSizing: "border-box",
          backgroundColor: "#000000",
          clipPath: "path('M 29.56 10.17 C 30.52 10.17 31.31 10.81 31.31 11.92 L 31.31 18.92 L 31.31 25.75 C 31.31 26.86 30.52 27.5 29.56 27.5 C 28.61 27.5 27.81 26.86 27.81 25.75 L 27.81 20.66 L 22.57 20.66 C 21.61 20.66 20.82 19.87 20.82 18.92 L 20.82 11.92 C 20.82 10.81 21.61 10.17 22.57 10.17 C 23.68 10.17 24.47 10.81 24.47 11.92 L 24.47 17.01 L 27.81 17.01 L 27.81 11.92 C 27.81 10.81 28.61 10.17 29.56 10.17 Z M 11.76 10.17 C 14.47 10.17 16.85 12.56 16.85 15.26 L 16.85 16.69 L 17.33 16.69 C 17.33 18.6 16.06 20.5 14.47 21.3 L 11.29 22.89 C 10.97 23.05 10.49 23.36 10.34 24 L 15.42 24 C 16.53 24 17.33 24.79 17.33 25.75 C 17.33 26.86 16.53 27.66 15.42 27.66 L 8.59 27.66 C 7.47 27.66 6.68 26.86 6.68 25.75 L 6.68 24.47 C 6.68 22.41 7.95 20.66 9.54 19.87 L 12.72 18.28 C 13.35 18.12 13.67 17.48 13.67 16.69 L 13.67 15.26 C 13.67 14.31 12.88 13.51 11.92 13.51 C 10.97 13.51 10.17 14.31 10.17 15.26 C 10.17 16.21 9.38 17.01 8.27 17.01 C 7.31 17.01 6.52 16.21 6.52 15.26 C 6.52 12.56 8.9 10.17 11.76 10.17 Z M 16.21 0 C 16.21 0.64 16.06 1.43 15.74 1.91 C 14.94 3.34 13.51 4.61 11.92 4.77 L 5.09 5.73 C 2.39 8.74 0.32 12.72 0 17.01 L 1.59 17.01 C 2.55 17.01 3.34 17.8 3.34 18.92 C 3.34 19.87 2.55 20.66 1.59 20.66 L 0 20.66 C 0.8 29.72 8.11 36.87 17.01 37.67 L 17.01 35.92 C 17.01 34.97 17.8 34.17 18.92 34.17 C 19.87 34.17 20.66 34.97 20.66 35.92 L 20.66 37.51 L 21.46 37.51 C 21.46 37.19 21.61 36.71 21.78 36.39 C 22.41 34.8 24 33.53 25.59 33.38 L 32.74 31.94 C 35.76 28.77 37.35 25.27 37.67 20.66 L 36.08 20.66 C 35.12 20.66 34.33 19.87 34.33 18.92 C 34.33 17.8 35.12 17.01 36.08 17.01 L 37.67 17.01 C 36.87 7.95 29.56 0.8 20.66 0 L 20.66 1.59 C 20.66 2.55 19.87 3.34 18.92 3.34 C 17.8 3.34 17.01 2.55 17.01 1.59 L 17.01 0 Z')"
        }} /><div key={1} style={{
          position: "absolute",
          left: "12.24px",
          top: "0px",
          width: "46.88px",
          height: "49.9px",
          boxSizing: "border-box",
          backgroundColor: "#000000",
          clipPath: "path('M 17.48 0 C 12.56 0 7.31 1.59 5.56 2.7 L 5.25 2.07 C 4.89 1.71 4.44 1.53 3.97 1.53 C 3.82 1.53 3.66 1.55 3.5 1.59 C 3.02 1.91 2.55 2.39 2.39 2.86 C 1.75 5.25 2.23 3.66 0.16 10.81 C 0.01 11.44 0.16 12.08 0.64 12.4 C 1.28 13.03 1.59 13.03 2.39 13.03 L 10.33 11.76 C 11.29 11.61 12.08 10.49 11.76 9.38 L 11.13 7.79 C 13.35 7.31 15.42 6.84 17.8 6.84 C 30.2 6.84 40.36 17.01 40.36 29.24 C 40.36 34.33 38.77 38.62 36.07 42.43 C 36.71 42.59 37.34 43.07 37.98 43.54 C 39.09 44.81 39.57 46.56 39.09 48.31 L 38.3 49.9 C 43.54 44.66 46.88 37.5 46.88 29.56 C 46.88 13.19 33.53 0 17.48 0 Z')"
        }} /><div key={2} style={{
          position: "absolute",
          left: "0px",
          top: "8.42px",
          width: "47.84px",
          height: "50.54px",
          boxSizing: "border-box",
          backgroundColor: "#000000",
          clipPath: "path('M 9.06 0.01 L 9.06 0.01 C 3.5 5.41 0.01 12.72 0.01 21.14 C 0.32 37.19 13.35 50.53 29.72 50.53 C 31.47 50.53 40.21 49.11 41.48 48.15 C 41.64 48.15 41.8 47.84 42.12 47.84 L 42.91 48.63 C 43.26 48.98 43.69 49.13 44.1 49.13 C 44.83 49.13 45.51 48.64 45.62 47.84 L 46.25 45.45 L 47.68 39.41 C 47.84 38.78 47.68 38.14 47.2 37.66 C 46.8 37.36 46.46 37.25 46.06 37.25 C 45.84 37.25 45.59 37.29 45.3 37.35 L 36.87 38.93 C 35.76 39.1 35.12 40.52 35.76 41.48 L 36.24 42.59 C 34.17 43.07 31.95 43.54 29.56 43.54 C 17.17 43.54 7.16 33.53 7.16 21.14 C 7.16 16.05 8.75 11.44 11.45 7.79 C 10.81 7.47 10.34 7.15 9.86 6.52 C 8.75 5.09 8.27 3.34 8.75 1.59 L 9.06 0.01 Z')"
        }} /></div></div></div>;
};
export default Slide8;
