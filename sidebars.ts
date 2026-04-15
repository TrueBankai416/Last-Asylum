import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Last Asylum Wiki Sidebars
 * Organized by content type: Guides, Characters, Strategies, Events
 */
const sidebars: SidebarsConfig = {
  guidesSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'guides/getting-started',
        'guides/beginner-tips',
        'guides/game-mechanics',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Advanced Guides',
      items: [
        'guides/resource-management',
        'guides/team-building',
      ],
    },
  ],
  
  charactersSidebar: [
    'characters/overview',
    {
      type: 'category',
      label: 'By Rarity',
      items: [
        'characters/legendary',
        'characters/epic',
        'characters/rare',
        'characters/common',
      ],
    },
    {
      type: 'category',
      label: 'By Role',
      items: [
        'characters/tanks',
        'characters/damage',
        'characters/support',
        'characters/control',
      ],
    },
  ],
  
  strategiesSidebar: [
    'strategies/overview',
    {
      type: 'category',
      label: 'PvE Strategies',
      items: [
        'strategies/campaign',
        'strategies/boss-fights',
        'strategies/dungeons',
      ],
    },
    {
      type: 'category',
      label: 'PvP Strategies',
      items: [
        'strategies/arena',
        'strategies/guild-wars',
      ],
    },
  ],
  
  eventsSidebar: [
    'events/current',
    'events/upcoming',
    {
      type: 'category',
      label: 'Event Archive',
      items: [
        'events/archive/past-events',
      ],
    },
  ],
};

export default sidebars;
