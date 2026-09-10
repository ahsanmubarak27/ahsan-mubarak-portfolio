import React, { useState, useEffect, useRef } from "react";
const Slide9: React.FC = () => {
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
  return <div id="slide-9" ref={outerRef} className="w-screen h-screen overflow-hidden relative" style={{
    backgroundColor: "#000"
  }}><div id="slide-inner-9" style={{
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
        left: "180.85px",
        top: "43.2px",
        width: "500.94px",
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
          }}>{"Kesimpulan & Rekomendasi"}</span></p></div><div key={1} style={{
        position: "absolute",
        left: "96px",
        top: "102.16px",
        width: "768px",
        height: "226.24px",
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
          }}>{"Kesimpulan:"}</span></p><p style={{
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
          }}>{"Penjualan bersifat fluktuatif dengan puncak di periode tertentu"}</span></p><p style={{
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
          }}>{"Aksesoris menjadi kontributor utama penjualan"}</span></p><p style={{
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
          }}>{"Hari Jumat adalah waktu paling optimal untuk penjualan"}</span></p><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))"
          }}>{"\xA0"}</span></p></div><div key={2} style={{
        position: "absolute",
        left: "96px",
        top: "328.4px",
        width: "768px",
        height: "226.24px",
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
          }}>{"Rekomendasi:"}</span></p><p style={{
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
          }}>{"Fokus campaign di hari Jumat \u2013 Sabtu"}</span></p><p style={{
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
          }}>{"Perbanyak stok produk aksesoris"}</span></p><p style={{
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
          }}>{"Maksimalkan promo di periode high season (Mei \u2013 Oktober)"}</span></p><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))"
          }}>{"\xA0"}</span></p></div><div key={3} style={{
        position: "absolute",
        left: "681.79px",
        top: "43.2px",
        width: "60.1px",
        height: "58.96px"
      }}><div key={0} style={{
          position: "absolute",
          left: "51.94px",
          top: "17.24px",
          width: "8.16px",
          height: "3.36px",
          boxSizing: "border-box",
          backgroundColor: "#000000",
          clipPath: "path('M 2.4 0 C 0.16 0 0.01 3.35 2.4 3.35 L 5.76 3.35 C 5.81 3.36 5.87 3.36 5.92 3.36 C 8.15 3.36 8.1 0 5.76 0 Z')"
        }} /><div key={1} style={{
          position: "absolute",
          left: "0px",
          top: "17.24px",
          width: "8px",
          height: "3.36px",
          boxSizing: "border-box",
          backgroundColor: "#000000",
          clipPath: "path('M 2.4 0 C 0.16 0 0.01 3.35 2.4 3.35 L 5.76 3.35 C 5.81 3.36 5.86 3.36 5.9 3.36 C 8 3.36 7.95 0 5.76 0 Z')"
        }} /><div key={2} style={{
          position: "absolute",
          left: "48.56px",
          top: "3.35px",
          width: "8.02px",
          height: "5.35px",
          boxSizing: "border-box",
          backgroundColor: "#000000",
          clipPath: "path('M 5.51 0.01 C 5.19 0.01 4.85 0.1 4.5 0.31 L 1.63 2.07 C 0 3.02 0.91 5.34 2.49 5.34 C 2.77 5.34 3.07 5.27 3.39 5.1 L 6.42 3.35 C 8.02 2.28 7.07 0.01 5.51 0.01 Z')"
        }} /><div key={3} style={{
          position: "absolute",
          left: "3.52px",
          top: "29.36px",
          width: "8.06px",
          height: "5.29px",
          boxSizing: "border-box",
          backgroundColor: "#000000",
          clipPath: "path('M 5.44 0.01 C 5.18 0.01 4.91 0.06 4.63 0.19 L 1.6 1.95 C 0 3.01 0.95 5.29 2.51 5.29 C 2.83 5.29 3.17 5.2 3.52 4.98 L 6.4 3.23 C 8.05 2.39 7.08 0.01 5.44 0.01 Z')"
        }} /><div key={4} style={{
          position: "absolute",
          left: "48.42px",
          top: "29.31px",
          width: "8.16px",
          height: "5.35px",
          boxSizing: "border-box",
          backgroundColor: "#000000",
          clipPath: "path('M 2.61 0 C 1 0 0.01 2.33 1.77 3.28 L 4.64 5.04 C 4.99 5.25 5.34 5.34 5.65 5.34 C 7.21 5.34 8.16 3.09 6.56 2.16 L 3.53 0.24 C 3.21 0.08 2.9 0 2.61 0 Z')"
        }} /><div key={5} style={{
          position: "absolute",
          left: "3.36px",
          top: "3.35px",
          width: "8.16px",
          height: "5.35px",
          boxSizing: "border-box",
          backgroundColor: "#000000",
          clipPath: "path('M 2.42 0.01 C 0.95 0.01 0.01 2.28 1.6 3.35 L 4.64 5.1 C 4.98 5.27 5.3 5.34 5.6 5.34 C 7.28 5.34 8.16 3.02 6.39 2.07 L 3.36 0.31 C 3.03 0.1 2.72 0.01 2.42 0.01 Z')"
        }} /><div key={6} style={{
          position: "absolute",
          left: "23.98px",
          top: "14.69px",
          width: "12.15px",
          height: "15.67px",
          boxSizing: "border-box",
          backgroundColor: "#000000",
          clipPath: "path('M 4.47 0 L 0 6.88 L 6.87 9.75 C 7.36 9.91 7.83 10.71 7.83 11.35 L 7.83 15.67 L 12.15 8.79 L 5.43 5.92 C 4.79 5.75 4.47 5.12 4.47 4.32 L 4.47 0 Z')"
        }} /><div key={7} style={{
          position: "absolute",
          left: "21.42px",
          top: "45.21px",
          width: "17.26px",
          height: "13.75px",
          boxSizing: "border-box",
          backgroundColor: "#000000",
          clipPath: "path('M 0 0.01 L 0 3.36 L 5.11 3.36 C 7.35 3.36 7.51 6.72 5.11 6.72 L 0 6.72 L 0 8.47 C 0 11.35 2.4 13.75 5.11 13.75 L 12.15 13.75 C 15.02 13.75 17.26 11.35 17.26 8.47 L 17.26 6.72 L 12.15 6.72 C 9.91 6.72 9.75 3.36 12.15 3.36 L 17.26 3.36 L 17.26 0.01 Z')"
        }} /><div key={8} style={{
          position: "absolute",
          left: "9.75px",
          top: "0px",
          width: "39.32px",
          height: "41.54px",
          boxSizing: "border-box",
          backgroundColor: "#000000",
          clipPath: "path('M 20.41 7.22 C 21.31 7.22 22.22 7.92 22.22 8.93 L 22.22 18.2 L 29.89 20.92 C 30.21 21.24 30.69 21.56 30.85 22.04 C 30.85 22.36 30.85 23 30.37 23.48 L 21.74 37.39 C 21.42 38.02 20.94 38.18 20.46 38.18 L 19.98 38.18 C 19.18 38.02 18.86 37.39 18.86 36.58 L 18.86 27.31 L 11.19 24.44 C 10.87 24.12 10.39 23.8 10.23 23.32 C 10.07 23 10.23 22.36 10.39 22.04 L 19.02 7.98 C 19.37 7.45 19.89 7.22 20.41 7.22 Z M 20.39 0 C 18.99 0 17.57 0.16 16.14 0.46 C 8.79 2.06 2.88 7.98 1.44 15.65 C 0 23 3.04 27.8 5.28 31.15 C 9.75 38.18 7.04 38.18 8.47 41.54 L 31.96 41.54 C 33.24 38.18 30.53 38.18 35.16 30.99 C 37.4 27.63 39.16 24.44 39.16 19 C 39.32 13.25 36.76 7.81 32.45 4.3 C 29.05 1.51 24.82 0 20.39 0 Z')"
        }} /></div></div></div>;
};
export default Slide9;
