import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

export const alt = "Anup Kumar — Full Stack Developer · FastAPI · Next.js · React Native";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ink = "#0d0d0d";
const bone = "#f3efe6";
const lime = "#c8f53c";
const mute = "#9c978e";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: ink,
          color: bone,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 88,
              height: 88,
              borderRadius: 20,
              background: lime,
              color: ink,
              fontSize: 40,
              fontWeight: 800,
            }}
          >
            AK
          </div>
          <div style={{ display: "flex", fontSize: 24, color: mute, letterSpacing: 4, textTransform: "uppercase" }}>
            Portfolio
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 112, fontWeight: 800, letterSpacing: -4, lineHeight: 1 }}>
            {profile.name}
            <span style={{ color: lime }}>.</span>
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 34, color: bone }}>
            Full Stack Developer
            <span style={{ color: lime, margin: "0 14px" }}>·</span>
            FastAPI
            <span style={{ color: lime, margin: "0 14px" }}>·</span>
            Next.js
            <span style={{ color: lime, margin: "0 14px" }}>·</span>
            React Native
          </div>
        </div>

        <div style={{ display: "flex", height: 12, width: "100%", background: lime, borderRadius: 6 }} />
      </div>
    ),
    size
  );
}
