import {
  Contact,
  Education,
  Hobbies,
  HomePageContent,
  LastUpdated,
  TechSkills,
  WorkExperience,
} from '@/lib-components';

export default function ProfilePage() {
  return (
    <>
      <HomePageContent pageContent={undefined} />
      <WorkExperience />
      <TechSkills />
      <Hobbies />
      <Education />
      <Contact />
      <LastUpdated />
    </>
  );
}
