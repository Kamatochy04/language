import { LoginForm } from "@/features/login";

import styles from "./loginPage.module.scss";

function LoginPage() {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
