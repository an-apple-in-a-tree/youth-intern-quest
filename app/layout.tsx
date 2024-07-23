import { ChakraProvider } from '@chakra-ui/react'
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import "./globals.css";
import {createClient} from "@/utils/supabase/server";


const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Youth Intern Quest",
  description: "The ultimate platform for students to find internships and jobs for highschoolers.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const supabase = createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();
  return (
    <html lang="en">
    <body className="bg-background text-foreground">
    <ChakraProvider>
        <Header/>
        {user && <Navbar/>}
        <main className="min-h-screen flex flex-col items-center">
          {children}
        </main>
      </ChakraProvider>
      </body>
    </html>
  );
}
