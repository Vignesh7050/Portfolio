import Image from "next/image";

import { IMAGES } from "@/assets/images";
import style from "./techskills.module.css";

export const TechSkills = () => {
  return (
    <section id="techSkills" className={style.techSkillsContainer}>
      <h3>Technical Skills</h3>
      <div className={style.skillsContainer}>
        <Image
          src={IMAGES.javaScriptIcon}
          alt="javascript"
          priority
          width={50}
          height={50}
          title="JavaScript"
        />
        <Image
          src={IMAGES.typeScriptIcon}
          alt="typeScript"
          priority
          width={50}
          height={50}
          title="TypeScript"
        />
        <Image
          src={IMAGES.reactJsIcon}
          alt="react"
          priority
          width={50}
          height={50}
          title="React Js"
        />
        <Image
          src={IMAGES.reduxIcon}
          alt="redux"
          priority
          width={50}
          height={50}
          title="Redux"
        />
        <Image
          src={IMAGES.nodeJsIcon}
          alt="nodejs"
          priority
          width={50}
          height={50}
          title="Node Js"
        />
        <Image
          src={IMAGES.gitIcon}
          alt="git"
          priority
          width={50}
          height={50}
          title="git"
        />
        <Image
          src={IMAGES.bitBucketIcon}
          alt="bitbucket"
          priority
          width={50}
          height={50}
          title="bitbucket"
        />
        <Image
          src={IMAGES.htmlIcon}
          alt="html"
          priority
          width={50}
          height={50}
          title="git"
        />
        <Image
          src={IMAGES.cssIcon}
          alt="css"
          priority
          width={50}
          height={50}
          title="css"
        />
      </div>
    </section>
  );
};
