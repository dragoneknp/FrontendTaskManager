import { Link } from "react-router-dom";
import styles from "./aside.module.scss";

const Aside = () => {
    return (
        <aside className={styles.container}>
            <nav className={styles.navbar}>
                <Link to="/" className={styles.link}>
                    Home
                </Link>
                <Link to="/tasks" className={styles.link}>
                    Tasks
                </Link>
            </nav>
        </aside>
    );
};
export default Aside;
