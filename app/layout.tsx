'use client';

// import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import './styles/global.css';
import { GlobalStyle } from './styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'Portfolio Demo',
//   description: 'A demo portfolio website',
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <header>
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/portfolio">Portfolio</a></li>
                <li><a href="/admin">Admin</a></li>
              </ul>
            </nav>
          </header>
          <main>{children}</main>
          <footer>
            <p>© 2024 Portfolio Demo. All rights reserved.</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}

