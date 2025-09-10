import styles from "./input.module.scss";

import { cva, VariantProps } from "class-variance-authority";

export type InputVariant = VariantProps<typeof inputVariant>;

export const inputVariant = cva("", {
  variants: {
    variant: {
      default: styles.container,
      onlyBorder: styles.border,
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
