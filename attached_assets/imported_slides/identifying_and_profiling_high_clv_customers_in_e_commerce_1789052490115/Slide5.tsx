import React, { useState, useEffect, useRef } from "react";
import img_1 from "./assets/images/image_2.png";
import img_2 from "./assets/images/image_3.png";
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
          }}>{"Revenue Distribution by CLV Category"}</span></p></div><img key={1} src={img_1} alt="Google Shape;72;p4" style={{
        position: "absolute",
        left: "28.01px",
        top: "193.31px",
        width: "524.79px",
        height: "322.69px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /><div key={2} style={{
        position: "absolute",
        left: "552.8px",
        top: "160.47px",
        width: "281.2px",
        height: "329.67px",
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
          }}>{"High-CLV contributed 41% for "}</span><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "Montserrat, 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "500",
            color: "#000000"
          }}>{"revenue"}</span><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "Montserrat, 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "500",
            color: "#000000"
          }}>{" or around $120.000"}</span></p><p style={{
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
          }}>{"Medium 26% "}</span><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "Montserrat, 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "500",
            color: "#000000"
          }}>{"around"}</span><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "Montserrat, 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "500",
            color: "#000000"
          }}>{" $76.000 "}</span></p><p style={{
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
          }}>{"Low and very low 32% around $94.000"}</span></p></div><img key={3} src={img_2} alt="Google Shape;74;p4" style={{
        position: "absolute",
        left: "37.51px",
        top: "114.15px",
        width: "173.49px",
        height: "79.15px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /></div></div>;
};
export default Slide5;
