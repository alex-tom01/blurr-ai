import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Box } from "@mui/material";
import ThemeProvider from "@/components/theme/ThemeProvider";
// import { Header } from "@/components/navbar/Header";
// import { Footer } from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Box sx={{ 
            width: {xs: "100%", md:"100%"}, 
            margin: 'auto', 
          }}>
          <ThemeProvider>
            {/* <Header /> */}
            {children}
            {/* <Footer /> */}
          </ThemeProvider>
        </Box>
      </body>
    </html>
  );
}
