import { ThemeSwitcher } from '../themeSwitcher';
import { HeaderNavSection } from './headerNavSection';
import { HeaderTitleSection } from './headerTitleSection';

export const Header = () => {
  return (
    <header
      className='bg-profile-header 
                w-full sticky top-0 z-20
                flex justify-between p-4 py-4 gap-2.5 
                backdrop-blur-xl items-center'
    >
      <HeaderTitleSection />
      <div className='flex items-center gap-6'>
        <ThemeSwitcher />
        <HeaderNavSection />
      </div>
    </header>
  );
};
