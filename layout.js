import "./globals.css";

export const metadata = {
  title: "CYBER WORLD",
  description: "CYBER WORLD Discord Bot Dashboard"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}