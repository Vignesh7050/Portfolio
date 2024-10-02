import { HeaderNavSection } from "./HeaderNavSection";
import { HeaderTitleSection } from "./HeaderTitleSection";
import style from "./header.module.css";

type HeaderProps = {};

export const Header = (props: HeaderProps) => {
  const {} = props;
  return (
    <header className={style.headerContainer}>
      <HeaderTitleSection headerTitle="Developer" />
      <HeaderNavSection />
    </header>
  );
};
