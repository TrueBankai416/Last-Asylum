import React from 'react';
import Navbar from '@theme-original/Navbar';
import type NavbarType from '@theme/Navbar';
import type { WrapperProps } from '@docusaurus/types';

type Props = WrapperProps<typeof NavbarType>;

const navbarBadgesStyle: React.CSSProperties = {
  backgroundColor: 'var(--ifm-navbar-background-color)',
  padding: '0.5rem 1rem',
  display: 'flex',
  gap: '0.5rem',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
};

const githubRepoUrl = 'https://github.com/TrueBankai416/Last-Asylum';
const githubIssuesUrl = `${githubRepoUrl}/issues`;

const navbarBadges = [
  {
    href: 'https://last-asylum.bankai-tech.com',
    src: 'https://img.shields.io/website?url=https%3A%2F%2Flast-asylum.bankai-tech.com',
    label: 'Visit the Last Asylum Wiki website',
    alt: 'Website',
  },
  {
    href: githubRepoUrl,
    src: 'https://img.shields.io/github/last-commit/TrueBankai416/Last-Asylum/main',
    label: 'Open the Last-Asylum GitHub repository (last commit)',
    alt: 'GitHub last commit',
  },
  {
    href: githubRepoUrl,
    src: 'https://img.shields.io/github/commit-activity/t/TrueBankai416/Last-Asylum/main',
    label: 'View commit activity for the Last-Asylum GitHub repository',
    alt: 'GitHub commit activity',
  },
  {
    href: githubIssuesUrl,
    src: 'https://img.shields.io/github/issues/TrueBankai416/Last-Asylum',
    label: 'View open issues for the Last-Asylum GitHub repository',
    alt: 'GitHub Issues',
  },
  {
    href: 'https://discord.gg/kuuaCwn4Vk',
    src: 'https://img.shields.io/discord/1486941490889490497?label=Discord',
    label: 'Join the Last Asylum Discord server',
    alt: 'Discord',
  },
];

export default function NavbarWrapper(props: Props): JSX.Element {
  return (
    <>
      <Navbar {...props} />
      <div style={navbarBadgesStyle}>
        {navbarBadges.map((badge) => (
          <a
            key={`${badge.href}-${badge.alt}`}
            href={badge.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={badge.label}
          >
            <img src={badge.src} alt={badge.alt} />
          </a>
        ))}
      </div>
    </>
  );
}
