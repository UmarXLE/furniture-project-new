import { Montserrat } from "next/font/google";
import "./globals.css";
import "@/variables/colors.css";
import AosInitial from "@/utils/AosInitial";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Стеновые ECO панели | Алматы, Астана, Бишкек - Kapitik Art Studio",
  description: "Купите стеновые ECO панели от Kapitik Art Studio в Алматы, Астане и Бишкеке. Широкий ассортимент высококачественных панелей для вашего дома или офиса.",
  keywords: "стеновые панели, ECO панели, купить, Алматы, Астана, Бишкек, дом, офис, дизайн интерьера, декор, украшение стен, Kapitik Art Studio",
  author: "Kapitik Art Studio",
  robots: "index, follow",
  ogTitle: "Стеновые ECO панели | Алматы, Астана, Бишкек - Kapitik Art Studio",
  ogDescription: "Купите стеновые ECO панели от Kapitik Art Studio в Алматы, Астане и Бишкеке. Широкий ассортимент высококачественных панелей для вашего дома или офиса.",
  ogType: "website",
  ogUrl: "https://www.yourwebsite.com",
  // ogImage: "https://www.yourwebsite.com/images/eco-panels.jpg",
  twitterTitle: "Стеновые ECO панели | Алматы, Астана, Бишкек - Kapitik Art Studio",
  twitterDescription: "Купите стеновые ECO панели от Kapitik Art Studio в Алматы, Астане и Бишкеке. Широкий ассортимент высококачественных панелей для вашего дома или офиса.",
  twitterCard: "summary_large_image",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <AosInitial/>
        <main className="main-wrapper">
            {children}
        </main>
      </body>
    </html>
  );
}





