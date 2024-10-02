import { Header } from "@/lib-components";

import style from "./profile.module.css";

type ProfileLayoutProps = {
  children: React.ReactNode;
};

function ProfileLayout(props: ProfileLayoutProps) {
  const { children } = props;

  return (
    <>
      <Header />
      <div className={style.profileContainer}>{children}</div>
    </>
  );
}

export default ProfileLayout;
