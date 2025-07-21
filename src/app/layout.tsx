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
  title: "Trevor Spear - Construction Consultant | Your Partner in Building Success",
  description: "Expert construction consultant with 40+ years experience in residential and commercial construction. Project management, cost estimation, risk assessment, and quality assurance in Raleigh, NC.",
  keywords: [
    "construction consultant",
    "project management",
    "cost estimation", 
    "construction expert",
    "building consultant",
    "Raleigh construction",
    "North Carolina construction",
    "commercial construction",
    "residential construction",
    "construction management",
    "Trevor Spear"
  ],
  authors: [{ name: "Trevor Spear" }],
  creator: "Trevor Spear",
  publisher: "Trevor Spear Construction Consulting",
  metadataBase: new URL("https://trevorspear.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" }
    ]
  },
  openGraph: {
    title: "Trevor Spear - Construction Consultant",
    description: "Your Partner in Building Success. Expert construction consulting with 40+ years experience in Raleigh, NC.",
    url: "https://trevorspear.com",
    siteName: "Trevor Spear Construction Consulting",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Trevor Spear Construction Consultant",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trevor Spear - Construction Consultant",
    description: "Your Partner in Building Success. Expert construction consulting with 40+ years experience.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="US-NC" />
        <meta name="geo.placename" content="Raleigh" />
        <meta name="geo.position" content="35.7796;-78.6382" />
        <meta name="ICBM" content="35.7796, -78.6382" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Trevor Spear Construction Consulting",
              "description": "Expert construction consultant with 40+ years experience in residential and commercial construction.",
              "url": "https://trevorspear.com",
              "telephone": "919-868-9574",
              "email": "trevor@trevorspear.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "518 S West St",
                "addressLocality": "Raleigh",
                "addressRegion": "NC",
                "postalCode": "27601",
                "addressCountry": "US"
              },
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "35.7796",
                  "longitude": "-78.6382"
                },
                "geoRadius": "50000"
              },
              "serviceType": [
                "Construction Consulting",
                "Project Management", 
                "Cost Estimation",
                "Risk Assessment",
                "Quality Assurance"
              ],
              "founder": {
                "@type": "Person",
                "name": "Trevor Spear",
                "jobTitle": "Construction Consultant"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
