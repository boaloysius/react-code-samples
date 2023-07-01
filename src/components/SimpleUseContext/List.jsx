import styles from "./styles.module.scss";
import { useContext } from "react";
import { UserContext } from "./SimpleUseContext";

export default function List() {
  const { filteredUsers, searchText } = useContext(UserContext);
  const header = [
    { name: "name", className: "md" },
    { name: "username", className: "md" },
    { name: "email", className: "lg" },
    { name: "phone", className: "md" },
  ];

  return (
    <>
      <div className={styles.table}>
        <div className={styles.searchText}>
          Search results for: {searchText}
        </div>
        <div className={styles.header}>
          {header.map((item) => (
            <span key={item.name} className={styles[item.className]}>
              {item.name}
            </span>
          ))}
        </div>
        {filteredUsers.map((row) => {
          return (
            <div key={row.id} className={styles.row}>
              {header.map((item) => (
                <span key={item.name} className={styles[item.className]}>
                  {row[item.name]}
                </span>
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
}
