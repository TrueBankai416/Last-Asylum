import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/guides/getting-started">
            Get Started 🎮
          </Link>
        </div>
      </div>
    </header>
  );
}

function Disclaimer() {
  return (
    <section className={styles.disclaimer}>
      <div className="container">
        <p>
          <strong>Disclaimer:</strong> This is a fan-made community wiki and is not affiliated with, 
          endorsed by, or connected to the developers or publishers of Last Asylum. All game content, 
          images, and trademarks are the property of their respective owners. This site is created 
          by fans, for fans, to help players enjoy the game.
        </p>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="Last Asylum Wiki - Your ultimate guide to surviving the asylum. Guides, strategies, character info, and more!">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <Disclaimer />
      </main>
    </Layout>
  );
}
