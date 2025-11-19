
export const metadata = {
  title: "911 Service Shop",
  description: "Premium game asset packs (legal)"
};

import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
