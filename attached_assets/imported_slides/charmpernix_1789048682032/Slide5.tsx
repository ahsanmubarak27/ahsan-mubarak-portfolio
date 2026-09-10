import React, { useState, useEffect, useRef } from "react";
import img_1 from "./assets/images/image_2.png";
const Slide5: React.FC = () => {
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
  return <div id="slide-5" ref={outerRef} className="w-screen h-screen overflow-hidden relative" style={{
    backgroundColor: "#000"
  }}><div id="slide-inner-5" style={{
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
        left: "75.11px",
        top: "36.53px",
        width: "738.68px",
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
          }}>{"Pola Tanggal dengan Penjualan Tertinggi"}</span></p><p style={{
          textAlign: "center",
          lineHeight: "1.2",
          fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))"
          }}>{"\xA0"}</span></p></div><img key={1} src={img_1} alt="Google Shape;91;p3" style={{
        position: "absolute",
        left: "0px",
        top: "102.16px",
        width: "548.34px",
        height: "437.84px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /><div key={2} style={{
        position: "absolute",
        left: "548.34px",
        top: "102.16px",
        width: "411.65px",
        height: "510.65px",
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
          }}>{"Mayoritas penjualan tertinggi terjadi di awal bulan"}</span></p><p style={{
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
          }}>{" Kemungkinan dipengaruhi oleh siklus gajian / cashflow pelanggan"}</span></p><p style={{
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
          }}>{"Terdapat sedikit anomali di akhir bulan (contoh: 25 September)"}</span></p><p style={{
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
          }}>{"Hal ini kemungkinan dipengaruhi oleh "}</span><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "Montserrat, 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "500",
            color: "#000000"
          }}>{"promosi"}</span><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "Montserrat, 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "500",
            color: "#000000"
          }}>{" atau campaign khusus"}</span></p><p style={{
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
          }}>{"\xA0"}</span></p></div><div key={3} style={{
        position: "absolute",
        left: "813.79px",
        top: "36.53px",
        width: "62.37px",
        height: "58.96px",
        boxSizing: "border-box",
        backgroundColor: "#000000",
        clipPath: "path('M 42.09 5.7 C 43.17 5.7 43.93 6.58 43.93 7.45 L 43.93 8.77 C 46.24 9.5 47.93 11.69 47.93 14.32 C 47.93 15.34 47.01 16.22 46.09 16.22 C 44.86 16.22 43.93 15.34 43.93 14.32 C 43.93 13.15 43.01 12.42 42.09 12.42 C 41.02 12.42 39.94 13.3 39.94 14.32 C 40.1 15.34 41.78 16.37 43.32 17.54 C 45.47 19 48.24 20.89 48.24 23.96 C 48.24 26.44 46.39 28.49 44.09 29.37 L 44.09 30.68 C 44.09 31.85 43.17 32.58 42.25 32.58 C 41.33 32.58 40.1 31.56 40.1 30.68 L 40.1 29.37 C 37.79 28.64 36.1 26.44 36.1 23.96 C 36.1 22.79 37.03 22.06 37.95 22.06 C 39.02 22.06 39.94 23.09 39.94 23.96 C 39.94 24.98 40.86 26.01 42.09 26.01 C 43.17 26.01 43.93 24.98 43.93 23.96 C 43.93 22.79 42.4 21.77 40.71 20.6 C 38.56 19.14 35.95 17.39 35.95 14.32 C 35.95 11.69 37.64 9.64 39.94 8.77 L 39.94 7.45 C 39.94 6.43 40.86 5.7 42.09 5.7 Z M 29.5 30.68 L 24.73 47.49 L 23.66 43.54 C 23.37 42.52 22.51 41.97 21.61 41.97 C 21.1 41.97 20.58 42.15 20.13 42.52 L 7.07 54.94 L 4.15 52.31 L 17.21 39.89 C 18.44 38.72 17.83 36.82 16.29 36.53 L 12.14 35.36 L 29.5 30.68 Z M 42.25 0 C 31.03 0 22.13 8.62 22.13 19.14 C 22.13 22.5 22.89 25.57 24.58 28.35 L 4 34.05 C 2.15 34.48 2.15 37.26 4 37.7 L 12.14 39.6 L 1.54 49.68 C 0 51.14 0 53.77 1.54 55.23 L 4.46 57.86 C 5.23 58.59 6.27 58.96 7.3 58.96 C 8.34 58.96 9.38 58.59 10.14 57.86 L 20.74 47.93 L 22.89 55.52 C 23.2 56.49 24.04 57 24.86 57 C 25.65 57 26.43 56.52 26.73 55.52 L 32.73 35.94 C 35.49 37.4 38.87 38.43 42.25 38.43 C 53.46 38.43 62.37 29.81 62.37 19.14 C 62.21 8.62 53.15 0 42.25 0 Z')"
      }} /></div></div>;
};
export default Slide5;
