
import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="font-poppins">
        <main>        
             <Header />
             {children}
             <Footer />
        </main>
      </body>
    </html>
  );
}
