import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Robot Signals — AI Tools & Open Source",
  description: "Open-source AI tools for sales, marketing, and automation. Lead generation, text-to-speech, help widgets, and Claude agent skills.",
  openGraph: {
    title: "Robot Signals — AI Tools & Open Source",
    description: "Open source AI automation tools. Lead generation, voice synthesis, help widgets, and Claude Code skills.",
    url: "https://robotsignals.io",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Robot Signals — AI Tools & Open Source",
    description: "Open source AI automation tools. Lead generation, voice synthesis, help widgets, and Claude Code skills.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
