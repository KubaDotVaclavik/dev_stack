import React from 'react';
import { Link, IndexLink } from 'react-router';
import styles from './navigation.css';

const Navigation = () => {
  return (
        <div>
            <IndexLink
              to="/home"
              className={styles.link}
              activeClassName={styles.active}
            >
                HOME
            </IndexLink>

            <Link
              to="/page"
              className={styles.link}
              activeClassName={styles.active}
            >
            PAGE
            </Link>
        </div>
    );
};

export default Navigation;
