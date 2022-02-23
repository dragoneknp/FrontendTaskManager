import Aside from "../Components/Aside/aside";
import styles from "./pageLayout.module.scss";
interface LayoutProps {
    children: React.ReactNode;
}
const PageLayout = (props: LayoutProps) => {
    return (
        <div className={styles.layout}>
            <Aside />
            <div className={styles.content}>
              {props.children}
            </div>
        </div>
    );
};
export default PageLayout;
