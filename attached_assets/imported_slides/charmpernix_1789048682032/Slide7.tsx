import React, { useState, useEffect, useRef } from "react";
import img_1 from "./assets/images/image_4.png";
const Slide7: React.FC = () => {
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
  return <div id="slide-7" ref={outerRef} className="w-screen h-screen overflow-hidden relative" style={{
    backgroundColor: "#000"
  }}><div id="slide-inner-7" style={{
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
        left: "112.85px",
        top: "33.87px",
        width: "654.27px",
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
          }}>{"Performa Kategori Produk per Bulan"}</span></p></div><div key={1} style={{
        position: "absolute",
        left: "548.35px",
        top: "92.83px",
        width: "411.65px",
        height: "484.79px",
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
          }}>{"Aksesoris mendominasi penjualan di sebagian besar bulan"}</span></p><p style={{
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
          }}>{"Jersey menunjukkan peningkatan signifikan di akhir tahun"}</span></p><p style={{
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
          }}>{"Terjadi penurunan penjualan pada Januari 2026"}</span></p><p style={{
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
          }}>{"Aksesoris menjadi driver utama volume penjualan"}</span></p><p style={{
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
          }}>{"Produk apparel (jersey & topi) berperan sebagai pendukung"}</span></p><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))"
          }}>{"\xA0"}</span></p></div><img key={2} src={img_1} alt="Google Shape;110;g3bf2712b5b6_0_43" style={{
        position: "absolute",
        left: "0px",
        top: "102.16px",
        width: "548.35px",
        height: "437.84px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /><div key={3} style={{
        position: "absolute",
        left: "767.11px",
        top: "33.87px",
        width: "58.81px",
        height: "58.96px"
      }}><div key={0} style={{
          position: "absolute",
          left: "33.79px",
          top: "25.75px",
          width: "11.56px",
          height: "27.07px",
          boxSizing: "border-box",
          backgroundColor: "#000000",
          clipPath: "path('M 5.85 0 C 4.97 0 3.8 1.03 3.8 2.05 L 3.8 3.37 C 1.61 4.1 0 6.29 0 8.78 C 0 12 2.49 13.75 4.54 15.22 C 6 16.39 7.61 17.41 7.61 18.58 C 7.61 19.6 6.73 20.48 5.85 20.48 C 4.68 20.48 3.8 19.6 3.8 18.58 C 3.8 17.41 2.93 16.68 2.05 16.68 C 1.03 16.68 0 17.56 0 18.58 C 0 21.07 1.61 23.11 3.8 23.99 L 3.8 25.31 C 3.8 26.34 4.68 27.07 5.85 27.07 C 6.88 27.07 7.61 26.19 7.61 25.31 L 7.61 23.99 C 9.8 23.26 11.56 21.07 11.56 18.58 C 11.56 15.36 8.93 13.61 6.88 12.15 C 5.42 10.98 3.8 9.95 3.8 8.78 C 3.8 7.9 4.68 7.03 5.85 7.03 C 7.03 7.03 7.61 7.9 7.61 8.78 C 7.61 9.95 8.63 10.83 9.51 10.83 C 10.68 10.83 11.56 9.95 11.56 8.78 C 11.56 6.29 9.95 4.24 7.61 3.37 L 7.61 2.05 C 7.61 1.03 6.73 0 5.85 0 Z')"
        }} /><div key={1} style={{
          position: "absolute",
          left: "0px",
          top: "0px",
          width: "58.81px",
          height: "58.96px",
          boxSizing: "border-box",
          backgroundColor: "#000000",
          clipPath: "path('M 52.95 7.47 C 54.13 7.47 55.01 8.34 55.01 9.51 L 55.01 15.22 L 3.81 15.22 L 3.81 9.51 C 3.81 8.34 4.68 7.47 5.56 7.47 L 7.61 7.47 L 7.61 9.51 C 7.61 10.68 8.49 11.41 9.51 11.41 C 10.39 11.41 11.27 10.39 11.27 9.51 L 11.27 7.47 L 27.36 7.47 L 27.36 9.51 C 27.36 10.68 28.23 11.41 29.41 11.41 C 30.58 11.41 31.31 10.39 31.31 9.51 L 31.31 7.47 L 47.4 7.47 L 47.4 9.51 C 47.4 10.68 48.27 11.41 49.3 11.41 C 50.47 11.41 51.2 10.39 51.2 9.51 L 51.2 7.47 Z M 13.32 22.83 C 14.34 22.83 15.07 23.85 15.07 24.87 C 15.36 25.75 14.34 26.77 13.32 26.77 L 9.51 26.77 C 8.34 26.77 7.61 25.75 7.61 24.87 C 7.61 23.85 8.49 22.83 9.51 22.83 Z M 13.32 30.58 C 14.34 30.58 15.07 31.45 15.07 32.33 C 15.36 33.5 14.34 34.38 13.32 34.38 L 9.51 34.38 C 8.34 34.38 7.61 33.5 7.61 32.33 C 7.61 31.31 8.49 30.58 9.51 30.58 Z M 13.32 38.48 C 14.34 38.48 15.07 39.36 15.07 40.23 C 15.36 41.11 14.34 42.13 13.32 42.13 L 9.51 42.13 C 8.34 42.13 7.61 41.11 7.61 40.23 C 7.61 39.06 8.49 38.48 9.51 38.48 Z M 39.64 24.14 C 48.13 24.14 55.01 31.16 55.01 39.5 C 55.01 47.98 47.98 54.86 39.64 54.86 C 31.16 54.86 24.28 47.98 24.28 39.5 C 24.28 31.16 31.31 24.14 39.64 24.14 Z M 9.51 0 C 8.49 0 7.61 0.88 7.61 1.9 L 7.61 3.66 L 5.56 3.66 C 2.49 3.66 0 6.15 0 9.51 L 0 45.35 C 0 48.42 2.49 51.21 5.56 51.21 L 24.28 51.21 C 27.8 55.74 33.36 58.96 39.64 58.96 C 50.18 58.96 58.81 50.32 58.81 39.65 L 58.81 9.66 C 58.81 6.3 56.32 3.66 52.95 3.66 L 51.2 3.66 L 51.2 1.9 C 51.2 0.73 50.18 0 49.3 0 C 48.42 0 47.25 0.88 47.25 1.9 L 47.25 3.66 L 31.16 3.66 L 31.16 1.9 C 31.16 0.73 30.28 0 29.41 0 C 28.53 0 27.36 0.88 27.36 1.9 L 27.36 3.66 L 11.27 3.66 L 11.27 1.9 C 11.27 0.73 10.39 0 9.51 0 Z')"
        }} /></div></div></div>;
};
export default Slide7;
