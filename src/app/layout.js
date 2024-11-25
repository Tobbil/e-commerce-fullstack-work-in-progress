import "./globals.css";

export const metadata = {
  title: "Audiophile Store",
  description: "Demo fullstack e-commerce website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
