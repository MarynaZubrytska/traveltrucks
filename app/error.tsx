'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import css from './error.module.css';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className={css.container}>
      <div className={css.content}>
        <h1 className={css.title}>Something went wrong!</h1>
        <p className={css.text}>
          We encountered an unexpected error while preparing your adventure.
          Please try again or head back to the main trail.
        </p>

        <div className={css.actions}>
          <button className={css.resetBtn} onClick={() => reset()}>
            Try again
          </button>

          <Link href="/" className={css.homeLink}>
            Go to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
