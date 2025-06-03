import "@/styles/globals.css";
import Head from "next/head";
import { useState } from "react";
import { Josefin_Sans, Audiowide } from "next/font/google";
import Layouts from "@/components/Layouts";
import Preloader from "@/components/Preloader";
import {useRouter} from 'next/router';

// Fonts
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-josefin-sans',
});

const audiowide = Audiowide({
  weight: "400",
  variable: "--font-audiowide",
  subsets: ["latin"],
});

// Metadata
export const metadata = {
  title: "A-S-E",
  description: "A front-end developer who creates user-interface websites and applications using React.js, Next.js, Node.js and other technologies.",
  image: "/Avatar-1.png", 
  url: "https://ahmed-portfolio-website.vercel.app/",
  type: "website",
  siteName: "A-S-E",
};

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };
  
  return (
    <div className={`${josefinSans.variable} ${audiowide.variable}`}>
      <Head>
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Manifest */}
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme Colors */}
        <meta name="theme-color" content="#731e1c" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#2a2e37" media="(prefers-color-scheme: dark)" />
        
        {/* SEO Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph */}
        <meta property="og:type" content={metadata.type} />
        <meta property="og:site_name" content={metadata.siteName} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        
        {/* PWA Meta Tags */}
        <meta name="application-name" content="A-S-E" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="A-S-E" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#731e1c" />
      </Head>

      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      
      <Layouts key={router.route}>
        <Component {...pageProps} />
      </Layouts>
    </div>
  );
}