import React, { useState, useEffect, useRef } from "react";
const Slide3: React.FC = () => {
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
  return <div id="slide-3" ref={outerRef} className="w-screen h-screen overflow-hidden relative" style={{
    backgroundColor: "#000"
  }}><div id="slide-inner-3" style={{
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
        left: "305.78px",
        top: "43.2px",
        width: "276.66px",
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
          }}>{"Overview Data"}</span></p></div><div key={1} style={{
        position: "absolute",
        left: "46.8px",
        top: "118.16px",
        width: "866.39px",
        height: "277.95px",
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
          }}>{"Sumber data: Data transaksi dan performa produk (Shopee)"}</span></p><p style={{
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
          }}>{"Periode data: Januari 2025 \u2013 Januari 2026"}</span></p><p style={{
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
          }}>{"Total data transaksi: 6.744 baris"}</span></p><p style={{
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
          }}>{"Total data produk (SKU): 11.307 baris"}</span></p><p style={{
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
          }}>{"Data telah melalui proses cleaning dan preprocessing"}</span></p><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))"
          }}>{"\xA0"}</span></p></div><div key={2} style={{
        position: "absolute",
        left: "582.44px",
        top: "43.2px",
        width: "58.82px",
        height: "58.96px"
      }}><div key={0} style={{
          position: "absolute",
          left: "0.32px",
          top: "0px",
          width: "44.21px",
          height: "13.48px",
          boxSizing: "border-box",
          backgroundColor: "#000000",
          clipPath: "path('M 22.16 0 C 12.16 0 2.15 2.27 0 6.8 C 2.15 11.25 12.16 13.48 22.16 13.48 C 32.16 13.48 42.14 11.25 44.21 6.8 C 42.14 2.27 32.16 0 22.16 0 Z')"
        }} /><div key={1} style={{
          position: "absolute",
          left: "0px",
          top: "11.89px",
          width: "44.85px",
          height: "15.75px",
          boxSizing: "border-box",
          backgroundColor: "#000000",
          clipPath: "path('M 0 0 L 0 7.16 C 0 12.73 10.34 15.59 20.83 15.74 C 24.81 9.55 31.81 5.57 39.76 5.57 C 41.51 5.57 43.26 5.73 44.85 6.2 L 44.85 0 C 39.92 3.98 30.85 5.41 22.43 5.41 C 14.15 5.41 4.93 3.82 0 0 Z')"
        }} /><div key={2} style={{
          position: "absolute",
          left: "20.65px",
          top: "20.79px",
          width: "38.17px",
          height: "38.17px",
          boxSizing: "border-box",
          backgroundColor: "#000000",
          clipPath: "path('M 27.77 13.79 C 29.01 13.79 30.33 15.48 29.1 16.7 L 18.77 27.04 C 18.45 27.36 18.01 27.51 17.58 27.51 C 17.14 27.51 16.7 27.36 16.38 27.04 L 9.38 20.2 C 8.16 18.98 9.29 17.29 10.59 17.29 C 10.99 17.29 11.4 17.44 11.77 17.81 L 17.49 23.54 L 26.72 14.31 C 27.01 13.95 27.39 13.79 27.77 13.79 Z M 19.09 0 C 8.59 0 0 8.59 0 19.09 C 0 29.74 8.59 38.17 19.09 38.17 C 29.58 38.17 38.17 29.74 38.17 19.09 C 38.17 8.59 29.58 0 19.09 0 Z')"
        }} /><div key={3} style={{
          position: "absolute",
          left: "0px",
          top: "25.88px",
          width: "19.09px",
          height: "15.43px",
          boxSizing: "border-box",
          backgroundColor: "#000000",
          clipPath: "path('M 0 0.01 L 0 7.16 C 0 11.93 8.11 14.63 17.34 15.43 C 17.02 11.93 17.66 8.43 19.09 5.25 C 11.77 4.93 4.14 3.34 0 0.01 Z')"
        }} /><div key={4} style={{
          position: "absolute",
          left: "0px",
          top: "39.56px",
          width: "27.36px",
          height: "19.25px",
          boxSizing: "border-box",
          backgroundColor: "#000000",
          clipPath: "path('M 0 0 L 0 10.66 C 0 16.54 11.29 19.24 22.43 19.24 C 24.17 19.24 25.76 19.24 27.36 19.09 C 22.58 15.91 19.09 11.14 17.81 5.41 C 10.97 4.93 3.98 3.34 0 0 Z')"
        }} /></div></div></div>;
};
export default Slide3;
