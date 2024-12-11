import { Inter } from 'next/font/google';
import Navigation from './components/Navigation';
import ThemeProviderWrapper from './components/ThemeProviderWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio Demo', 
  description: 'Showcasing projects, skills, and my creative work.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
      <ThemeProviderWrapper> 
          <header>
            <Navigation /> 
          </header>
          <main>{children}</main>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
