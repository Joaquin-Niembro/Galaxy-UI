import styles from './styles.module.css'

function Button({ children }: { children: string }) {
  return <button className={`${styles.button}`}>{children}</button>;
}

export { Button };
