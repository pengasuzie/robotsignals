import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Robot Signals — AI Studio",
  description: "AI strategy and engineering for businesses ready to move. Custom AI solutions, RAG, vision, agents — built by a senior team with a track record of shipping.",
  openGraph: {
    title: "Robot Signals — AI Studio",
    description: "AI strategy and engineering for businesses. Custom solutions, RAG, vision, agents — from a team that's built and exited.",
    url: "https://robotsignals.io",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Robot Signals — AI Studio",
    description: "AI strategy and engineering for businesses. Custom solutions, RAG, vision, agents — from a team that's built and exited.",
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
