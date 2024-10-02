import style from "./homePageContent.module.css";
import { profileContent } from "@/utils";

type HomePageContentProps = {
  pageContent: any;
};

export const HomePageContent = (props: HomePageContentProps) => {
  const { pageContent = profileContent } = props;

  return (
    <div className={style.homePageContentContainer} id="home">
      <h1 className={style.greetingText}>
        Hello &#128075;, I&apos;m{" "}
        <strong className={style.authorName}>{pageContent.authorName}</strong>
      </h1>
      <h2 className={style.authorDesignation}>
        {pageContent.authorDesignation}
      </h2>
      <p className={style.profileSummary}>{pageContent.profileSummary}</p>
    </div>
  );
};
