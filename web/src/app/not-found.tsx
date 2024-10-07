import { redirect } from 'next/navigation';

export default function NotFound() {
  return (
    <div>
      <h2>Redirecting to Home page, Please wait...</h2>
      {redirect('/portfolio')}
    </div>
  );
}
