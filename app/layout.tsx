import './globals.css';import type { Metadata } from 'next';import { Header } from '@/components/Header';import { Footer } from '@/components/Footer';import { siteConfig } from '@/lib/config';
export const metadata: Metadata={title:{default:siteConfig.title,template:`%s | ${siteConfig.title}`},description:siteConfig.subtitle,openGraph:{title:siteConfig.title,description:siteConfig.subtitle,type:'website'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en-GB"><body><Header/><main>{children}</main><Footer/></body></html>}
