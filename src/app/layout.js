import { Syne } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackgroundGlow from "../components/BackgroundGlow";
import BookACallBadge from "../components/BookACallBadge";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: {
    default: "Webbrixs - Premium Web Design & Software Engineering Agency",
    template: "%s | Webbrixs",
  },
  description: "Started as a college side project by founder Yashwant, Webbrixs has grown into a 10+ person team delivering UI/UX, web development, and personalized AI workflow automation for businesses that want to move faster.",
  keywords: ["web design", "software development", "e-commerce solutions", "SaaS", "custom UI/UX", "SEO optimization", "Webbrixs", "AI automation"],
  openGraph: {
    title: "Webbrixs - Digital Agency",
    description: "Started as a college side project by founder Yashwant, Webbrixs has grown into a 10+ person team delivering UI/UX, web development, and personalized AI workflow automation for businesses that want to move faster.",
    url: "https://webbrixs.in",
    siteName: "Webbrixs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webbrixs - Digital Agency",
    description: "Started as a college side project by founder Yashwant, Webbrixs has grown into a 10+ person team delivering UI/UX, web development, and personalized AI workflow automation for businesses that want to move faster.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${syne.variable} h-full antialiased dark`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-surface font-sans overflow-x-hidden w-full">
        <BackgroundGlow />
        <Header />
        <div className="flex-grow z-10 relative">
          {children}
        </div>
        <BookACallBadge />
        <Footer />
      </body>
    </html>
  );
}
