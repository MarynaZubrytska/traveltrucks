'use client';

import { useCampersStore } from '@/lib/store/useCampersStore';
import css from './LoadMoreButton.module.css';

export default function LoadMoreButton() {
  const { loadMore, canLoadMore, isLoading } = useCampersStore();

  if (!canLoadMore()) return null;

  return (
    <button
      className={css.button}
      type="button"
      onClick={loadMore}
      disabled={isLoading}
    >
      Load more
    </button>
  );
}
