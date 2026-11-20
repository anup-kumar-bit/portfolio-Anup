import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** "AK" monogram in the site style (matches the header logo). */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 7,
          background: "#ffd23f",
          color: "#0d0d0d",
          fontSize: 16,
          fontWeight: 800,
          letterSpacing: -0.5,
        }}
      >
        AK
      </div>
    ),
    size
  );
}
