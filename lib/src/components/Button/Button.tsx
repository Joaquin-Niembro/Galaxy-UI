import styles from "./styles.module.css";
import { ButtonProps } from "./Button.types";

function LoadingSpinner() {
  return <div>Loading...</div>;
}

function Button({
  children,
  isLoading,
  type = "default",
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[type]}`}
      {...rest}
      disabled={isLoading}
    >
      {isLoading ? <LoadingSpinner /> : children}
    </button>
  );
}

export { Button };
