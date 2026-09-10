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
        left: "16.14px",
        top: "43.7px",
        width: "832.94px",
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
          }}>{"Ringkasan Performa Penjualan 2025 \u2013 Jan 2026"}</span></p></div><div key={1} style={{
        position: "absolute",
        left: "46.8px",
        top: "245.32px",
        width: "866.39px",
        height: "226.24px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "9.6px 9.6px 9.6px 9.6px",
        wordWrap: "break-word"
      }}><p style={{
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
          }}>{"Total pendapatan mencapai "}</span><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "Montserrat, 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "500",
            color: "#000000"
          }}>{"Rp 661"}</span><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "Montserrat, 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "500",
            color: "#000000"
          }}>{",34 juta selama periode analisis"}</span></p><p style={{
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
          }}>{"Terdapat 5.664 transaksi yang berhasil diproses"}</span></p><p style={{
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
          }}>{"Total produk terjual sebanyak 9.054 unit"}</span></p><p style={{
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
          }}>{"Rata-rata setiap transaksi membeli lebih dari 1 produk"}</span></p><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))"
          }}>{"\xA0"}</span></p></div><div key={2} style={{
        position: "absolute",
        left: "849.08px",
        top: "43.7px",
        width: "57.45px",
        height: "58.96px",
        boxSizing: "border-box",
        backgroundColor: "#000000",
        clipPath: "path('M 51.75 3.82 C 52.74 3.82 53.46 4.85 53.46 5.88 C 53.46 7.06 52.74 7.79 51.75 7.79 L 5.56 7.79 C 4.57 7.79 3.57 6.76 3.57 5.88 C 3.57 5 4.57 3.82 5.56 3.82 Z M 39.77 15.29 C 40.91 15.29 41.63 16.18 41.63 17.06 L 41.63 25 L 41.77 25 C 41.77 26.17 40.91 26.9 39.92 26.9 C 39.06 26.9 38.06 25.88 38.06 25 L 38.06 21.91 L 29.94 30.14 C 29.58 30.51 29.12 30.69 28.65 30.69 C 28.19 30.69 27.73 30.51 27.37 30.14 L 24.8 27.64 L 18.53 33.96 C 18.25 34.33 17.79 34.52 17.3 34.52 C 16.82 34.52 16.32 34.33 15.97 33.96 C 15.26 33.23 15.26 32.05 15.97 31.32 L 23.38 23.53 C 23.74 23.16 24.23 22.97 24.74 22.97 C 25.23 22.97 25.73 23.16 26.09 23.53 L 28.51 26.17 L 35.36 19.11 L 32.36 19.11 C 31.22 19.11 30.51 18.23 30.51 17.06 C 30.51 16.03 31.37 15.29 32.36 15.29 Z M 28.51 51.61 C 29.65 51.61 30.51 52.64 30.51 53.52 C 30.51 54.4 29.65 55.28 28.51 55.28 C 27.51 55.28 26.8 54.4 26.8 53.52 C 26.8 52.64 27.66 51.61 28.51 51.61 Z M 5.56 0 C 2.57 0 0 2.5 0 5.74 C 0 8.23 1.71 10.29 3.85 11.17 L 3.85 38.52 L 2 38.52 C 1 38.52 0.29 39.55 0.29 40.43 C 0.29 41.61 1.14 42.2 2 42.2 L 26.94 42.2 L 26.94 47.78 C 24.8 48.52 23.24 50.72 23.24 53.22 C 23.24 56.46 25.66 58.96 28.8 58.96 C 31.79 58.96 34.5 56.46 34.5 53.22 C 34.5 50.72 32.79 48.66 30.65 47.78 L 30.65 42.2 L 55.6 42.2 C 56.74 42.2 57.45 41.32 57.45 40.43 C 57.31 39.4 56.59 38.52 55.45 38.52 L 53.46 38.52 L 53.46 11.17 C 55.6 10.44 57.31 8.23 57.31 5.74 C 57.31 2.65 54.74 0 51.75 0 Z')"
      }} /><img key={3} src={img_1} alt="Google Shape;85;g3bf2712b5b6_0_28" style={{
        position: "absolute",
        left: "91.5px",
        top: "119.49px",
        width: "777px",
        height: "109px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /></div></div>;
};
export default Slide4;
