
import styles from "./Button.module.css"
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "danger"

type ButtonProps = {
  children: ReactNode
  onClick?: () => void
  disabled?: boolean
  variant?: Variant
}

export const Button = ({
                         children,
                         onClick,
                         variant = "primary",
                       }: ButtonProps) => {
  const classNames = [styles.btn]

  if (variant === "primary") classNames.push(styles["btn-primary"])
  if (variant === "secondary") classNames.push(styles["btn-secondary"])
  if (variant === "danger") classNames.push(styles["btn-danger"])
  return (
    <button  className={classNames.join(" ")}

            onClick={onClick} >
      {children}
    </button>
  )
}
