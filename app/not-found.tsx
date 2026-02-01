import Link from 'next/link';
import css from './not-found.module.css';

export default function NotFound() {
  return (
    <main className={css.container}>
      <div className={css.content}>
        <h1 className={css.title}>404</h1>
        <h2 className={css.subtitle}>Whoops! You've wandered off the trail.</h2>
        <p className={css.text}>
          The page you are looking for doesn't exist or has been moved to another campsite.
        </p>
        <Link href="/" className={css.homeBtn}>
          Back to Home
        </Link>
      </div>
    </main>
  );
}