import { Header } from '@/lib-components';

type ProfileLayoutProps = {
  children: React.ReactNode;
};

function ProfileLayout(props: ProfileLayoutProps) {
  const { children } = props;

  return (
    <>
      <Header />
      <div className='bg-profile-bg bg-cover bg-no-repeat h-screen bg-fixed'>{children}</div>
    </>
  );
}

export default ProfileLayout;
