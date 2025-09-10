import { UserInfoForm } from "@/features";

import styles from "./userInfo.module.scss";

function UserInfoPage() {
  return (
    <div className={styles.container}>
      <UserInfoForm />
    </div>
  );
}

export default UserInfoPage;
