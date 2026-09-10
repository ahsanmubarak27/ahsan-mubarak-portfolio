import React, { useState, useEffect, useRef } from "react";
const Slide2: React.FC = () => {
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
  return <div id="slide-2" ref={outerRef} className="w-screen h-screen overflow-hidden relative" style={{
    backgroundColor: "#000"
  }}><div id="slide-inner-2" style={{
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
        left: "285.33px",
        top: "43.2px",
        width: "296px",
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
          }}>{"Tujuan Analisis"}</span></p></div><div key={1} style={{
        position: "absolute",
        left: "46.8px",
        top: "120.83px",
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
          }}>{"Mengidentifikasi tanggal dengan penjualan tertinggi"}</span></p><p style={{
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
          }}>{"Menganalisis pola penjualan berdasarkan waktu (harian & bulanan)"}</span></p><p style={{
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
          }}>{"Mengetahui performa produk dan kategori utama"}</span></p><p style={{
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
          }}>{"Memahami perilaku pembelian pelanggan"}</span></p><p style={{
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
          }}>{"Memberikan insight untuk meningkatkan strategi penjualan"}</span></p><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))"
          }}>{"\xA0"}</span></p></div><div key={2} style={{
        position: "absolute",
        left: "581.33px",
        top: "43.2px",
        width: "59.37px",
        height: "58.96px"
      }}><div key={0} style={{
          position: "absolute",
          left: "23.06px",
          top: "0px",
          width: "36.31px",
          height: "35.75px",
          boxSizing: "border-box",
          backgroundColor: "#000000",
          clipPath: "path('M 27.89 0 C 27.43 0 26.96 0.17 26.57 0.57 L 18.98 8.16 C 18.69 8.59 18.4 8.88 18.4 9.32 L 17.52 15.31 L 8.03 24.8 C 7.3 24.5 6.43 24.21 5.7 24.21 C 2.49 24.21 0 26.84 0 30.06 C 0 33.41 2.49 35.75 5.7 35.75 C 8.76 35.75 11.39 33.27 11.39 30.06 C 11.39 29.18 11.1 28.45 10.8 27.72 L 20.29 18.23 L 26.28 17.35 C 26.57 17.35 27.01 17.21 27.45 16.77 L 35.04 9.17 C 36.31 7.91 35.25 5.81 33.6 5.81 C 33.54 5.81 33.49 5.82 33.43 5.82 L 29.2 6.4 L 29.78 2.17 C 29.99 0.94 28.97 0 27.89 0 Z')"
        }} /><div key={1} style={{
          position: "absolute",
          left: "11.24px",
          top: "12.97px",
          width: "34.6px",
          height: "34.46px",
          boxSizing: "border-box",
          backgroundColor: "#000000",
          clipPath: "path('M 17.23 0 C 7.74 0 0 7.74 0 17.38 C 0 26.86 7.59 34.46 17.23 34.46 C 26.71 34.46 34.6 26.86 34.6 17.38 C 34.6 14.6 34.02 12.27 32.99 9.93 L 27.01 15.92 C 27.01 16.21 27.15 16.79 27.15 17.23 C 27.15 22.49 22.77 26.86 17.52 26.86 C 12.12 26.86 7.74 22.49 7.74 17.23 C 8.03 11.83 12.12 7.45 17.52 7.45 C 17.96 7.45 18.4 7.45 18.69 7.74 L 24.82 1.61 C 22.63 0.59 20 0 17.23 0 Z')"
        }} /><div key={2} style={{
          position: "absolute",
          left: "0px",
          top: "1.29px",
          width: "57.66px",
          height: "57.67px",
          boxSizing: "border-box",
          backgroundColor: "#000000",
          clipPath: "path('M 29.05 0 C 12.85 0 0 12.99 0 28.91 C 0 44.68 12.99 57.67 28.9 57.67 C 44.81 57.67 57.66 44.68 57.66 28.91 C 57.66 24.68 56.78 20.44 55.03 16.65 L 53.57 18.1 C 52.55 18.98 51.53 19.56 50.21 19.71 L 48.17 20.15 C 49.48 22.78 50.07 25.7 50.07 28.91 C 50.07 40.59 40.58 49.78 29.05 49.78 C 17.52 49.78 8.03 40.3 8.03 28.91 C 8.03 17.23 17.52 7.74 29.05 7.74 C 32.11 7.74 35.03 8.32 37.81 9.49 L 38.24 7.45 C 38.39 6.28 38.97 5.11 39.85 4.24 L 41.31 2.78 C 37.51 0.88 33.43 0 29.05 0 Z')"
        }} /></div></div></div>;
};
export default Slide2;
