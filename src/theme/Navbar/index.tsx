import React from 'react';
import Navbar from '@theme-original/Navbar';
import type NavbarType from '@theme/Navbar';
import type { WrapperProps } from '@docusaurus/types';

type Props = WrapperProps<typeof NavbarType>;

const navbarBadgesStyle: React.CSSProperties = {
  backgroundColor: 'var(--ifm-navbar-background-color)',
  borderBottom: '1px solid var(--ifm-toc-border-color)',
  padding: '0.5rem 1rem',
  display: 'flex',
  gap: '0.5rem',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
};

export default function NavbarWrapper(props: Props): JSX.Element {
  return (
    <>
      <Navbar {...props} />
      <div style={navbarBadgesStyle}>
        <a
          href="https://last-asylum.bankai-tech.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit the Last Asylum Wiki website"
        >
          <img
            src="https://img.shields.io/website?url=https%3A%2F%2Flast-asylum.bankai-tech.com"
            alt="Website"
          />
        </a>
        <a
          href="https://github.com/TrueBankai416/Last-Asylum"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open the Last-Asylum GitHub repository (last commit)"
        >
          <img
            src="https://img.shields.io/github/last-commit/TrueBankai416/Last-Asylum/main"
            alt="GitHub last commit"
          />
        </a>
        <a
          href="https://github.com/TrueBankai416/Last-Asylum"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View commit activity for the Last-Asylum GitHub repository"
        >
          <img
            src="https://img.shields.io/github/commit-activity/t/TrueBankai416/Last-Asylum/main"
            alt="GitHub commit activity"
          />
        </a>
        <a
          href="https://github.com/TrueBankai416/Last-Asylum/issues"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View open issues for the Last-Asylum GitHub repository"
        >
          <img
            src="https://img.shields.io/github/issues/TrueBankai416/Last-Asylum"
            alt="GitHub Issues"
          />
        </a>
        <a
          href="https://discord.gg/kuuaCwn4Vk"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Join the Last Asylum Discord server"
        >
          <img
            src="https://img.shields.io/discord/1486941490889490497?label=Discord"
            alt="Discord"
          />
        </a>
      </div>
    </>
  );
}
