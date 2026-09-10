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
          fontSize: "calc(20pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(20pt * var(--pptx-font-scale, 1))",
            fontFamily: "Montserrat, 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "700",
            color: "#000000"
          }}>{"Campaign Funnel: From Impressions to Conversions"}</span></p></div><img key={1} src={img_1} alt="Google Shape;86;p7" style={{
        position: "absolute",
        left: "47.51px",
        top: "102.16px",
        width: "377.29px",
        height: "393.87px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /><div key={2} style={{
        position: "absolute",
        left: "424.8px",
        top: "92.16px",
        width: "506.74px",
        height: "501.92px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "9.6px 9.6px 9.6px 9.6px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
            fontFamily: "Montserrat, 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "500",
            color: "#000000"
          }}>{"Insight"}</span></p><p style={{
          textAlign: "left",
          lineHeight: "1.38",
          marginTop: "12pt",
          textIndent: "-34px",
          paddingLeft: "48px",
          fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
          marginBottom: "0"
        }}><span style={{
            marginRight: "8px",
            color: "#000000",
            fontSize: "15pt"
          }}>{"\u25CF"}</span><span style={{
            fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
            fontFamily: "Montserrat, 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "500",
            color: "#000000"
          }}>{"CTR (Clicks / Impressions) \u2248 3.07%, Out of everyone who sees the ad, only 3% click on it"}</span></p><p style={{
          textAlign: "left",
          lineHeight: "1.38",
          textIndent: "-34px",
          paddingLeft: "48px",
          fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            marginRight: "8px",
            color: "#000000",
            fontSize: "15pt"
          }}>{"\u25CF"}</span><span style={{
            fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
            fontFamily: "Montserrat, 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "500",
            color: "#000000"
          }}>{"CTR (Clicks / Impressions) \u2248 3.07%, Out of everyone who sees the ad, only 3% click on it"}</span></p><p style={{
          textAlign: "left",
          lineHeight: "1.38",
          textIndent: "-34px",
          paddingLeft: "48px",
          fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            marginRight: "8px",
            color: "#000000",
            fontSize: "15pt"
          }}>{"\u25CF"}</span><span style={{
            fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
            fontFamily: "Montserrat, 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "500",
            color: "#000000"
          }}>{"Lead Rate (Leads / Clicks) \u2248 14.4%, Out of those who click, only 14% become leads"}</span></p><p style={{
          textAlign: "left",
          lineHeight: "1.38",
          textIndent: "-34px",
          paddingLeft: "48px",
          fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            marginRight: "8px",
            color: "#000000",
            fontSize: "15pt"
          }}>{"\u25CF"}</span><span style={{
            fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
            fontFamily: "Montserrat, 'Helvetica Neue', Arial, sans-serif",
            fontWeight: "500",
            color: "#000000"
          }}>{"Closing Rate (Conversions / Leads) \u2248 32.5%, Out of leads, about one-third convert"}</span></p><p style={{
          textAlign: "left",
          lineHeight: "1.38",
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
          }}>{"The most critical stage: Impressions, Clicks. CTR is still on the low side, meaning the main issue is in the ad appeal (headline, visuals, or targeting)."}</span></p><p style={{
          textAlign: "left",
          lineHeight: "1.38",
          marginTop: "15pt",
          paddingLeft: "48px",
          fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(15pt * var(--pptx-font-scale, 1))"
          }}>{"\xA0"}</span></p></div></div></div>;
};
export default Slide7;
