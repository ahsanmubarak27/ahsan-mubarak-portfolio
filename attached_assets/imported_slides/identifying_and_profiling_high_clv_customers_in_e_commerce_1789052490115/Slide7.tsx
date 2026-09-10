import React, { useState, useEffect, useRef } from "react";
import img_1 from "./assets/images/image_5.png";
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
          }}>{"Location-based CLV Distribution"}</span></p></div><img key={1} src={img_1} alt="Google Shape;87;p6" style={{
        position: "absolute",
        left: "24.55px",
        top: "140.52px",
        width: "552.62px",
        height: "345.48px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /><div key={2} style={{
        position: "absolute",
        left: "577.17px",
        top: "122.52px",
        width: "382.83px",
        height: "407.24px",
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
          }}>{"San Francisco: 100% of customers High-CLV"}</span></p><p style={{
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
          }}>{"Los Angeles: 91% Medium-CLV, only 9% High"}</span></p><p style={{
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
          }}>{"New York: Mixed, 60% Medium and 40% High "}</span></p><p style={{
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
          }}>{"San Francisco shows strong customer potential. New York and Los Angeles also show growth opportunities if targeted properly."}</span></p></div></div></div>;
};
export default Slide7;
