import styles from "./CanvasMenu.module.scss";

const CanvasMenu: React.FC = ({ children }) => {
    return <section id="canvas-menu" className={styles["off-canvas-menu"]}></section>;
};

export default CanvasMenu;
