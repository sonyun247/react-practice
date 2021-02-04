import styles from "./Header.module.css";

export default () => (
    <header>
        <ul className={styles.nav}>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/tv">TV</a>
            </li>
            <li>
                <a href="/search">Search</a>
            </li>
            <li>
                <a href="/detail">Detail</a>
            </li>
        </ul>
    </header >
);