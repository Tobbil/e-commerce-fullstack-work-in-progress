import { CartProvider } from "./components/CartContext";
import "./globals.css";

export const metadata = {
  title: "Audiophile Store",
  description: "Demo fullstack e-commerce website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <CartProvider>
        <body>{children}</body>
      </CartProvider>
    </html>
  );
}
