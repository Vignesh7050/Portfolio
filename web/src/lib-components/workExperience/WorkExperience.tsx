import Link from "next/link";
import Image from "next/image";

import style from "./experience.module.css";
import { IMAGES } from "@/assets/images";

export const WorkExperience = () => {
  return (
    <section id="experience" className={style.experienceContainer}>
      <div style={{ gap: "10px", display: "flex", flexDirection: "column" }}>
        <h3>Work Experience</h3>

        <ul style={{ paddingLeft: "20px" }}>
          <li style={{ listStyle: "none" }}>
            <h4>SpurTree Technologies Pvt Ltd | August 2021 - Present</h4>
            <ul className={style.experiencesList}>
              <li>
                Developed and maintained scalable web applications using
                React.js and Node.js.
              </li>
              <li>
                Collaborated closely with cross-functional teams in an Agile
                environment to deliver high-quality software on time.
              </li>
              <li>
                Utilized custom React hooks for clean code architecture,
                ensuring separation of concerns and adhering to DRY principles.
              </li>
              <li>
                Implemented modern state management solutions like Redux for
                seamless front-end application architecture.
              </li>
            </ul>
          </li>
          <div className={style.downloadResumeContainer}>
            <p className={style.moreInfoText}>For project & more details </p>
            <Link
              className={style.downloadResumeLink}
              target="_blank"
              href={process.env.RESUME_GOOGLE_DOC_LINK || "/"}
            >
              <p>Download Resume</p>
              <Image
                src={IMAGES.downloadIcon}
                alt="download resume"
                priority
                width={15}
                height={15}
              />
            </Link>
          </div>
        </ul>
      </div>
    </section>
  );
};
