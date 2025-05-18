import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import AppLayout from "@/components/layouts/app-layout";

// import "../../public/icons/style.css";
import "@/resources/styles/main.css";
import "./globals.css";

export const comfortaa = Comfortaa({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-comfortaa",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Готуємо з Любов’ю",
  description:
    "Відкривай смачне натхнення щодня. Ця кулінарна книга — твій стильний онлайн-помічник зі смачними та оригінальними рецептами. Готуй легко завдяки покроковим інструкціям, апетитним фото та зручному інтерфейсу. Готуй із задоволенням. Ділись любов’ю через їжу.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" className={comfortaa.className}>
        <body
          className="text-foreground antialiased light"
          style={{
            overflow: "visible!important",
          }}
        >
          <AppLayout>{children}</AppLayout>
        </body>
      </html>
    </>
  );
}
