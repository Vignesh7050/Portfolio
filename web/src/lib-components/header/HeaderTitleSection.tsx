import { IMAGES } from "@/assets/images";
import style from "./header.module.css";
import Image from "next/image";

type HeaderTitleSectionProps = {
  headerTitle: string;
};

export const HeaderTitleSection = (props: HeaderTitleSectionProps) => {
  const { headerTitle = "" } = props;
  return (
    <div className={style.headerTitleSection}>
      <Image
        className={style.profileImage}
        src={IMAGES.profile}
        alt="profile image"
        priority
      />
      <h3 className={style.headerTitle}>{headerTitle}</h3>
      <Image
        src={IMAGES.codeIcon}
        alt="code icon"
        priority
        width={20}
        height={20}
      />
    </div>
  );
};
