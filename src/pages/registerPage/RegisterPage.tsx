import { RegisterForm } from "@/features";

import styles from "./registerPage.module.scss";

function RegisterPage() {
  return (
    <div className={styles.container}>
      <div className={styles.inf}>
        <h1 className={styles.inf__title}>Название приложения</h1>
        <p className={styles.inf__text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab hic,
          repellat soluta consequuntur nam et sint, rem similique, illum laborum
          fugit. Dolorum harum quis consectetur labore enim perferendis
          laboriosam eveniet.
        </p>
      </div>
      <RegisterForm />
    </div>
  );
}

export default RegisterPage;
