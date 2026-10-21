import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: "linear-gradient(135deg, #0a192f 0%, #112240 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#d4af37",
          borderRadius: "8px",
          border: "2px solid #d4af37",
          fontWeight: 900,
          fontFamily: "monospace",
          boxShadow: "0 2px 4px rgba(0,0,0,0.5)",
        }}
      >
        S
      </div>
    ),
    {
      ...size,
    }
  );
}
