import type { Metadata } from "next";
import "./globals.css";
import { dmSans } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Housy - Your Dream Home Awaits",
  description:
    "Find your perfect home with Housy - the premier real estate platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
