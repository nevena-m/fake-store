import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export default function StoreNavigation() {

    return (
        <nav className={`flex flex-1/2 items-center flex-row justify-end [&>*]:transition-colors [&>*]:duration-200 ${styles.StoreNavigationWrapper}`}>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
        </nav>
    )
}