import { HeaderNavSection } from "./HeaderNavSection";
import { HeaderTitleSection } from "./HeaderTitleSection";
import style from "./header.module.css";

export const Header = () => {
  return (
    <header className={style.headerContainer}>
      <HeaderTitleSection headerTitle="Developer" />
      <HeaderNavSection />
    </header>
  );
};
