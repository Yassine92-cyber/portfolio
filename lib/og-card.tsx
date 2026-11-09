import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogAlt = "Yassine Kaddouri, Ph.D. | Founder & CEO of Orinavis";

export async function renderOgCard() {
  const portrait = await readFile(path.join(process.cwd(), "public/images/yassine-og.jpg"));
  const portraitSrc = `data:image/jpeg;base64,${portrait.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          backgroundColor: "#090B10",
          backgroundImage: "radial-gradient(circle at 85% 20%, rgba(146,134,255,0.22) 0%, rgba(9,11,16,0) 55%)",
          padding: "72px 80px",
          color: "#F6F4F0",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", fontSize: 22, letterSpacing: "0.18em", color: "rgba(246,244,240,0.7)" }}>
            <div style={{ width: 48, height: 2, backgroundColor: "#9286FF", marginRight: 20 }} />
            FOUNDER & CEO · SCIENTIST · BUILDER
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 68, lineHeight: 1.08, letterSpacing: "-0.03em", maxWidth: 720 }}>
              Building clearer paths from skills to opportunity.
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 34 }}>Yassine Kaddouri, Ph.D.</div>
            <div style={{ display: "flex", fontSize: 24, marginTop: 8, color: "rgba(246,244,240,0.65)" }}>
              Founder & CEO of <span style={{ color: "#E4ABAE", marginLeft: 8 }}>Orinavis</span>
              <span style={{ marginLeft: 24, marginRight: 24 }}>·</span>
              portfolio-sooty-five-31.vercel.app
            </div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", marginLeft: 48 }}>
          <div
            style={{
              display: "flex",
              width: 300,
              height: 380,
              borderRadius: "150px 150px 28px 28px",
              border: "1px solid rgba(246,244,240,0.12)",
              backgroundColor: "#171A24",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={portraitSrc} width={236} height={236} style={{ borderRadius: 9999 }} alt="" />
          </div>
        </div>
      </div>
    ),
    { ...ogSize }
  );
}
