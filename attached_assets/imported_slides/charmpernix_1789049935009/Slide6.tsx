import React, { useState, useEffect, useRef } from "react";
import img_1 from "./assets/images/image_3.png";
const Slide6: React.FC = () => {
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
  return <div id="slide-6" ref={outerRef} className="w-screen h-screen overflow-hidden relative" style={{
    backgroundColor: "#000"
  }}><div id="slide-inner-6" style={{
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
        left: "289.34px",
        top: "31.2px",
        width: "285.32px",
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
          }}>{"Produk Terlaris"}</span></p></div><div key={1} style={{
        position: "absolute",
        left: "548.35px",
        top: "90.16px",
        width: "411.65px",
        height: "458.93px",
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
          }}>{"Produk dengan harga terjangkau cenderung lebih laku"}</span></p><p style={{
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
          }}>{"Produk dengan fungsi sederhana & kebutuhan tinggi lebih cepat terjual"}</span></p><p style={{
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
          }}>{"Produk top memiliki gap penjualan yang cukup jauh dibanding produk lain"}</span></p><p style={{
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
          }}>{"Produk non-utama (seperti jersey MTB) memiliki peminat yang lebih sedikit"}</span></p></div><img key={2} src={img_1} alt="Google Shape;100;g3bf2712b5b6_0_22" style={{
        position: "absolute",
        left: "0px",
        top: "100.7px",
        width: "541.67px",
        height: "437.84px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /><div key={3} style={{
        position: "absolute",
        left: "574.66px",
        top: "31.2px",
        width: "59.1px",
        height: "58.96px"
      }}><div key={0} style={{
          position: "absolute",
          left: "29.98px",
          top: "0px",
          width: "11.85px",
          height: "12.84px",
          boxSizing: "border-box",
          backgroundColor: "#000000",
          clipPath: "path('M 5.85 0 C 4.68 0 3.95 1.03 3.95 1.9 L 3.95 6.29 L 3.37 5.71 C 3 5.34 2.52 5.16 2.05 5.16 C 1.57 5.16 1.1 5.34 0.73 5.71 C 0 6.44 0 7.75 0.73 8.49 L 4.53 12.29 C 4.9 12.65 5.41 12.84 5.93 12.84 C 6.44 12.84 6.95 12.65 7.32 12.29 L 11.12 8.49 C 11.85 7.75 11.85 6.44 11.12 5.71 C 10.75 5.34 10.24 5.16 9.73 5.16 C 9.21 5.16 8.7 5.34 8.34 5.71 L 7.75 6.29 L 7.75 1.9 C 7.75 1.03 6.87 0 5.85 0 Z')"
        }} /><div key={1} style={{
          position: "absolute",
          left: "0px",
          top: "7.75px",
          width: "59.1px",
          height: "51.21px",
          boxSizing: "border-box",
          backgroundColor: "#000000",
          clipPath: "path('M 24.43 16.53 C 25.6 16.53 26.33 17.56 26.33 18.58 L 26.33 26.33 C 26.33 27.36 25.31 28.38 24.43 28.38 C 23.55 28.38 22.38 27.36 22.38 26.33 L 22.38 18.58 C 22.38 17.56 23.41 16.53 24.43 16.53 Z M 35.84 16.53 C 36.72 16.53 37.74 17.56 37.74 18.58 L 37.74 26.33 C 37.74 27.36 36.86 28.38 35.84 28.38 C 34.67 28.38 33.94 27.36 33.94 26.33 L 33.94 18.58 C 33.94 17.56 34.82 16.53 35.84 16.53 Z M 47.54 16.53 C 48.57 16.53 49.3 17.56 49.3 18.58 L 49.3 26.33 C 49.3 27.36 48.42 28.38 47.54 28.38 C 46.37 28.38 45.5 27.36 45.5 26.33 L 45.5 18.58 C 45.5 17.56 46.37 16.53 47.54 16.53 Z M 24.28 43.45 C 25.31 43.45 26.04 44.48 26.04 45.35 C 26.04 46.38 25.16 47.4 24.28 47.4 C 23.41 47.4 22.24 46.38 22.24 45.35 C 22.38 44.48 23.41 43.45 24.28 43.45 Z M 46.08 43.45 C 47.11 43.45 47.84 44.48 47.84 45.35 C 47.84 46.38 46.96 47.4 46.08 47.4 C 45.06 47.4 44.18 46.38 44.18 45.35 C 44.18 44.48 45.06 43.45 46.08 43.45 Z M 2.05 0 C 0.88 0 0 0.88 0 1.76 C 0 2.78 1.61 3.81 2.49 3.81 L 9.8 3.81 C 10.09 5.12 15.07 31.16 15.36 32.48 C 13.31 33.36 12 35.41 12 37.6 C 12 40.67 14.63 43.31 17.7 43.31 L 18.58 43.31 C 18.43 43.89 18.29 44.62 18.29 45.35 C 18.29 48.43 20.77 51.21 23.99 51.21 C 27.07 51.21 29.55 48.57 29.55 45.35 C 29.55 44.62 29.41 44.04 29.26 43.31 L 40.23 43.31 C 40.08 43.89 39.79 44.62 39.79 45.35 C 39.79 48.43 42.43 51.21 45.5 51.21 C 48.57 51.21 51.2 48.57 51.2 45.35 C 51.2 44.62 51.05 44.04 50.76 43.45 L 53.69 43.45 C 54.86 43.45 55.73 42.57 55.73 41.7 C 55.73 40.53 54.86 39.65 53.69 39.65 L 17.41 39.65 C 16.24 39.65 15.36 38.77 15.36 37.89 C 15.36 36.87 16.24 35.84 17.41 35.84 L 53.25 35.84 C 54.13 35.84 55 35.12 55 34.24 L 58.81 11.12 C 59.1 9.95 58.08 8.92 57.05 8.92 L 14.19 8.92 L 12.73 1.61 C 12.58 0.73 11.85 0 10.97 0 Z')"
        }} /></div></div></div>;
};
export default Slide6;
