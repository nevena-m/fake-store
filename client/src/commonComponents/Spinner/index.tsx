import { GridLoader } from "react-spinners";
import { colorHash } from "../../styles/colors";
import styles from "./styles.module.scss";

export default function Spinner() {
    return <GridLoader color={colorHash.primary} className={styles.Spinner} size={50}/>
}