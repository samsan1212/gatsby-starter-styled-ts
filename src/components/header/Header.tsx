import { Link } from "gatsby";

import styles from "./Header.module.css";

import type { PropsWithoutRef } from "react";

interface Props {
  siteTitle?: string;
}

export const Header: React.FC<Props> = ({
  siteTitle = "",
}: PropsWithoutRef<Props>) => (
  <header className={styles.root}>
    <div className={styles.titleWrapper}>
      <h1 className={styles.title}>
        <Link to="/" className={styles.titleLink}>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);
