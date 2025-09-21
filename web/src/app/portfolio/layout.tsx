import { Header } from '@/lib-components';

type ProfileLayoutProps = {
  children: React.ReactNode;
};

function ProfileLayout(props: ProfileLayoutProps) {
  const { children } = props;

  return (
    <>
      <div className='bg-profile-bg bg-cover bg-no-repeat bg-fixed'>
        <Header />
        {children}
      </div>
    </>
  );
}

export default ProfileLayout;
