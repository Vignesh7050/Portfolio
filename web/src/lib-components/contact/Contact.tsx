import { profileContent } from "@/utils";
import style from "./contact.module.css";
import Link from "next/link";
import Image from "next/image";

export const Contact = () => {
  return (
    <section id="contacts" className={style.contactContainer}>
      <h3>Contacts</h3>
      <div className={style.contactDetailsListContainer}>
        {profileContent.contactDetails.map((contacts: any) => {
          return (
            <Link href={contacts.contactUrl} target="_blank">
              <Image
                className={style.contactDetailsIcons}
                src={contacts.icon2 || contacts.icon}
                alt="profile image"
                priority
                width={30}
                height={30}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
};
