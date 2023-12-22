import styles from "./styles.module.css";
import { ButtonProps } from "./Button.types";

function Button({ children, isLoading, type = "default" }: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[type]}`}>
      {isLoading ? "Loading..." : children}
    </button>
  );
}

export { Button };
