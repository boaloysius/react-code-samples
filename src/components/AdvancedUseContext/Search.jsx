import styles from "./styles.module.scss";
import { useUsers } from "./UserContext";

export default function Search() {
  const { searchText, setSearchText } = useUsers();
  return (
    <div className={styles.searchBox}>
      <p>Search person by name</p>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
}
