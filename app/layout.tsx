'use client';

import React from 'react';
import { Inter } from 'next/font/google';
import './styles/global.css';
import { GlobalStyle } from './styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import Head from 'next/head';
import { HomeIcon, UserIcon, CameraIcon, CogIcon } from '@heroicons/react/24/solid';

const inter = Inter({ subsets: ['latin'] });

const Navigation = styled.nav`
  margin: ${theme.spacing.largest} auto;
  width: 340px;
  height: 74px;
  background: ${theme.colors.white};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const NavList = styled.ul`
  display: contents;
  width: 350px;
`;

const NavItem = styled.li<{ $active: boolean }>`
  position: relative;
  list-style: none;
  width: 25%;
  height: 74px;
  z-index: 1;

  a {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    text-align: center;
    font-weight: 500;

    .icon {
      position: relative;
      display: block;
      line-height: 75px;
      font-size: 1em;
      text-align: center;
      transition: 0.5s;
      color: ${theme.colors.background};
    }

    .text {
      position: absolute;
      color: ${theme.colors.background};
      font-weight: 700;
      font-size: 1em;
      letter-spacing: 0.05em;
      transition: 0.5s;
      opacity: 0;
      transform: translateY(20px);
    }
  }

  ${({ $active }) =>
    $active &&
    `a .icon {
      transform: translateY(-35px);
      color: ${theme.colors.text};
    }

    a .text {
      opacity: 1;
      transform: translateY(10px);
    }`}
`;

const Indicator = styled.div<{ $activeindex: number }>`
  position: absolute;
  top: -66%;
  left: 0%;
  width: 74px;
  height: 74px;
  background: ${theme.colors.secondary};
  border-radius: 50%;
  border: 6px solid #212327;
  transition: 0.5s;
  transform: ${({ $activeindex }) => `translateX(calc(85px * ${$activeindex}))`};

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    width: 20px;
    height: 20px;
    background: transparent;
    border-top-right-radius: 20px;
    box-shadow: 1px -10px 0 0 #212327;
  }

  &:after {
    right: -22px;
    border-top-left-radius: 20px;
    box-shadow: -1px -10px 0 0 #212327;
  }

  &:before {
    left: -22px;
  }
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const navLinks = [
    { href: '/', name: 'Home', icon: <HomeIcon style={{ width: '24px', height: '24px' }} className="w-6 h-6" /> },
    { href: '/about', name: 'About', icon: <UserIcon style={{ width: '24px', height: '24px' }} className="w-6 h-6" /> },
    { href: '/portfolio', name: 'Portfolio', icon: <CameraIcon style={{ width: '24px', height: '24px' }} className="w-6 h-6" /> },
    { href: '/admin', name: 'Admin', icon: <CogIcon style={{ width: '24px', height: '24px' }} className="w-6 h-6" /> }
  ];


  const activeindex = navLinks.findIndex((link) => link.href === pathname);

  return (
    <html lang="en">
      <Head>
        <title>My Portfolio</title>
      </Head>
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <header>
            <Navigation>
              <NavList>
                {navLinks.map((link) => (
                  <NavItem key={link.href} $active={pathname === link.href}>
                    <Link 
                      href={link.href} 
                      aria-current={pathname === link.href ? 'page' : undefined} 
                    >
                      <span className="icon" title={link.name}>
                        {link.icon}
                      </span>
                      <span className="text">{link.name}</span>
                    </Link>
                  </NavItem>
                ))}
                <Indicator $activeindex={activeindex} />
              </NavList>
            </Navigation>
          </header>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
