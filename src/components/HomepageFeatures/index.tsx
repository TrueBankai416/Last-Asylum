import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  emoji: string;
  description: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Comprehensive Guides',
    emoji: '📖',
    description: (
      <>
        From beginner tips to advanced strategies, our guides cover everything
        you need to master Last Asylum. Start your journey the right way!
      </>
    ),
    link: '/docs/guides/getting-started',
  },
  {
    title: 'Character Database',
    emoji: '⚔️',
    description: (
      <>
        Explore our complete character database with tier lists, build guides,
        and team recommendations. Find the perfect survivors for your squad!
      </>
    ),
    link: '/docs/characters/overview',
  },
  {
    title: 'Battle Strategies',
    emoji: '🎯',
    description: (
      <>
        Dominate every game mode with our battle strategies. Campaign, Arena,
        Guild Wars, and more - we&apos;ve got you covered!
      </>
    ),
    link: '/docs/strategies/overview',
  },
];

function Feature({title, emoji, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <span className={styles.featureEmoji} role="img">{emoji}</span>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <Link className="button button--primary button--sm" to={link}>
          Learn More →
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
