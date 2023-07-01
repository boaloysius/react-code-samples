import Search from "./Search";
import List from "./List";
import styles from "./styles.module.scss";

import { UserProvider } from "./UserContext";

export default function AdvancedUseContext() {
  return (
    <UserProvider>
      <div className={styles.simpleUseContextDemo}>
        <Search />
        <List />
      </div>
    </UserProvider>
  );
}

export { AdvancedUseContext };
