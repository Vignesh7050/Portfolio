import { textConstants } from '@/utils';
import { redirect } from 'next/navigation';

export default function NotFound() {
  return (
    <div>
      <h2>{textConstants.redirectionPageMessage}</h2>
      {redirect('/portfolio')}
    </div>
  );
}
