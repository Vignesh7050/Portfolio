import { ThemeSwitcher } from '../themeSwitcher';
import { HeaderNavSection } from './headerNavSection';
import { HeaderTitleSection } from './headerTitleSection';

export const Header = () => {
  return (
    <header
      className='bg-profile-header 
                w-full sticky top-0 z-10 
                flex justify-between p-5 gap-2.5 
                backdrop-blur-xl items-center border-b border-header-border'
    >
      <HeaderTitleSection />
      <div className='flex items-center gap-6'>
        <ThemeSwitcher />
        <HeaderNavSection />
      </div>
    </header>
  );
};
