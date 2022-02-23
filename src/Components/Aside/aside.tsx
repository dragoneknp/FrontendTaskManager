import styles from "./aside.module.scss";

const Aside = () => {
    return (
        <aside className={styles.container}>
            <nav className={styles.navbar}>
                {/* <Link href="/home"> */}
                    <a className={styles.link}>Home</a>
                {/* </Link> */}
                {/* <Link href="/login"> */}
                    <a className={styles.link}>Login</a>
                {/* </Link> */}
            </nav>
        </aside>
    );
};
export default Aside;
