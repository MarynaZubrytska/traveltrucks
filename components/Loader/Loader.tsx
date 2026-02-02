import clsx from 'clsx';
import css from './Loader.module.css';

type LoaderProps = {
  variant?: 'inline' | 'overlay';
};

export default function Loader({ variant = 'inline' }: LoaderProps) {
  return (
    <div
      className={clsx(css.overlay, variant === 'overlay' && css.overlayFull)}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className={css.spinner} />
    </div>
  );
}
