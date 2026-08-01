import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YardOS",
  description: "Car dealer inventory, finance, cheque and sales operating system",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
