import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stackola.vercel.app"),
  title: {
    default: "Adewunmi Abdulhameed | Software Engineer",
    template: "%s | Adewunmi Abdulhameed",
  },
  description: "Portfolio of Adewunmi Abdulhameed, Frontend Developer and Software Engineer specializing in high-performance web applications and systems programming.",
  keywords: ["Software Engineer", "Frontend Developer", "Java", "Next.js", "React", "Ile-Ife", "Nigeria", "Adewunmi Abdulhameed"],
  openGraph: {
    title: "Adewunmi Abdulhameed | Software Engineer",
    description: "Portfolio of Adewunmi Abdulhameed, Frontend Developer and Software Engineer specializing in high-performance web applications and systems programming.",
    url: "https://stackola.vercel.app",
    siteName: "Adewunmi Abdulhameed Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adewunmi Abdulhameed | Software Engineer",
    description: "Portfolio of Adewunmi Abdulhameed, Frontend Developer and Software Engineer specializing in high-performance web applications and systems programming.",
  },
  verification: {
    google: "MP_MYWqWSR0KQEE7xOgViS4bA8Pq9dCuiQm0CvT2U6Q",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-black text-[#EAEAEA] font-mono">
        {children}
      </body>
    </html>
  );
}
