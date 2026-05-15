import styles from "./styles.module.css";

import type React from "react";

type Props = React.ComponentProps<"button"> & {
  name: String;
};

export function Button({ name, ...rest }: Props) {
  return (
    <button className={styles.container} {...rest}>
      <span>{name}</span>
    </button>
  );
}
