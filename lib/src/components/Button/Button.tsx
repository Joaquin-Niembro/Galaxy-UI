import { ButtonProps } from "./Button.types";
import "./button.scss";

function LoadingSpinner() {
  return <div>Loading...</div>;
}

function Button({
  children,
  isLoading,
  type = "default",
  ...rest
}: ButtonProps) {
  const style = type === "default" ? "button" : `button ${type}`;
  return (
    <button className={style} {...rest} disabled={isLoading}>
      {isLoading ? <LoadingSpinner /> : children}
    </button>
  );
}

export { Button };
