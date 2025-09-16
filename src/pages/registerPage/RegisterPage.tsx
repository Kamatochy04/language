import { RegisterForm } from "@/features";

import styles from "./registerPage.module.scss";

function RegisterPage() {
  return (
    <div className={styles.container}>
      <RegisterForm />
    </div>
  );
}

export default RegisterPage;
