import React from 'react';
import styles from './styles.module.css';

const BottomBar: React.FC = () => {
  const handleDiscordClick = () => {
    window.open('https://discord.gg/kuuaCwn4Vk', '_blank');
  };

  const handleCoffeeClick = () => {
    window.open('https://www.buymeacoffee.com/BankaiTech', '_blank');
  };

  return (
    <div className={styles.bottomBar}>
      <div className={styles.container}>
        <button
          onClick={handleDiscordClick}
          className={`${styles.button} ${styles.discordButton}`}
          title="Join our Discord community!"
          aria-label="Join Discord"
        >
          <svg
            className={`${styles.icon} ${styles.discordIcon}`}
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fill="currentColor"
              d="M20.317 4.369A19.791 19.791 0 0 0 15.885 3c-.191.333-.403.78-.551 1.125a18.271 18.271 0 0 0-6.668 0A12.469 12.469 0 0 0 8.114 3a19.736 19.736 0 0 0-4.433 1.37C.884 8.58.126 12.687.505 16.738a19.954 19.954 0 0 0 5.993 3.043c.486-.664.92-1.367 1.296-2.104a12.981 12.981 0 0 1-2.037-.98c.171-.125.338-.256.5-.391c3.927 1.847 8.19 1.847 12.07 0c.164.137.331.268.5.391c-.651.381-1.332.71-2.037.98c.376.737.81 1.44 1.296 2.104a19.903 19.903 0 0 0 5.994-3.043c.446-4.701-.76-8.77-3.763-12.369ZM8.02 14.306c-1.183 0-2.157-1.089-2.157-2.419c0-1.331.95-2.419 2.157-2.419c1.218 0 2.18 1.1 2.157 2.419c0 1.33-.95 2.419-2.157 2.419Zm7.974 0c-1.183 0-2.156-1.089-2.156-2.419c0-1.331.95-2.419 2.156-2.419c1.219 0 2.181 1.1 2.157 2.419c0 1.33-.938 2.419-2.157 2.419Z"
            />
          </svg>
          <span className={styles.text}>Join Discord</span>
        </button>

        <button
          onClick={handleCoffeeClick}
          className={`${styles.button} ${styles.coffeeButton}`}
          title="Support me on Buy me a coffee!"
          aria-label="Buy me a coffee"
        >
          <svg
            className={`${styles.icon} ${styles.coffeeIcon}`}
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fill="currentColor"
              d="M20 3H4v10a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-3h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 5h-2V5h2zM4 19h16v2H4z"
            />
          </svg>
          <span className={styles.text}>Buy me a coffee</span>
        </button>
      </div>
    </div>
  );
};

export default BottomBar;
