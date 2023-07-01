import styles from "./styles.module.scss";
import { useContext } from "react";
import { UserContext } from "./SimpleUseContext";

export default function Search() {
  const { searchText, setSearchText } = useContext(UserContext);
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
