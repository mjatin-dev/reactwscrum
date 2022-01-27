import { Dispatch, SetStateAction } from "react";
import styles from "./styles.module.scss";
import { Tab } from "../constants/signupTabs";

interface Tabs {
  tabs: Tab[];
  currentTab: Tab;
  setCurrentTab: Dispatch<SetStateAction<Tab>>;
}

const TabSwitch = ({ tabs, currentTab, setCurrentTab }: Tabs) => {
  // const [currentTab, setCurrentTab] = useState<Tab>(tabs[0]);
  return (
    <div className={styles.tabs}>
      {tabs &&
        tabs.length > 0 &&
        tabs.map((tab) => {
          const { id, name, value } = tab;
          return (
            <div
              onClick={() => setCurrentTab(tab)}
              key={`tabs-${name}-${id}`}
              className={`${styles.tab} ${
                currentTab.value === value ? styles.tabActive : ""
              }`}
            >
              <p className={styles.tabName}>{name}</p>
            </div>
          );
        })}
    </div>
  );
};

export default TabSwitch;
