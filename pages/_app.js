import "@/styles/globals.css";
import Head from "next/head";
import { Josefin_Sans, Audiowide  } from "next/font/google";
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
  description: `A front-end developer is a type of software developer who creates the user-interface  websites and applications.
  Front-end developers reactjs  ,nextjs,nodejs and other technologies to code the appearance and interactive features of web content.`,
  image: "/public/Avatar-1.png",
  url: "https://ahmed-portfolio-website.vercel.app/",
  type: "website profile",
  siteName: "A-S-E",
};


// Components
import Layouts from "@/components/Layouts";

export default function App({ Component, pageProps }) {
  return (
    <Layouts >
      <Head>
        <link rel='favicon' href='/favicon.ico' />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:type" content={metadata.type} />
        <meta property="og:site_name" content={metadata.siteName} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:image" content={metadata.image} />
      </Head>
      <div>
        <Component {...pageProps} />
      </div>
    </Layouts>


  );
}
