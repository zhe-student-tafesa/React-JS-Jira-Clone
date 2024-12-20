
import Header from "@/components/header/header";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import {Inter} from "next/font/google"

const inter = Inter({subsets: ["latin"]})


export const metadata = {
  title: "Jira",
  description: "Project Management App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        >
          {/* header */}
          <Header/>
          <main className="min-h-screen">  
            {children}
          </main>
          {/* footer */}
          <footer className="bg-gray-900 py-12">
            <div className="container mx-auto px-4 text-center text-gray-200">
              <p>Made with 💗 by Frank</p>
            </div>
          </footer>
        </ThemeProvider>

      </body>
    </html>
  );
}
