'use client';

import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useCampersStore } from '@/lib/store/useCampersStore';
import FiltersSidebar from '@/components/Catalog/FiltersSidebar/FiltersSidebar';
import CamperList from '@/components/Catalog/CamperList/CamperList';
import LoadMoreButton from '@/components/Catalog/LoadMoreButton/LoadMoreButton';

import css from './page.module.css';

export default function CatalogPage() {
  const search = useCampersStore((s) => s.search);
  const items = useCampersStore((s) => s.items);
  const isLoading = useCampersStore((s) => s.isLoading);
  const error = useCampersStore((s) => s.error);

  useEffect(() => {
    search();
  }, [search]);

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  return (
    <main className="container">
      <div className={css.page}>
        <FiltersSidebar />
        <section aria-label="Campers catalog">
          <div className={css.catalog}>
            <CamperList items={items} />
            <LoadMoreButton />
            {isLoading && <p>Loading...</p>}
          </div>
        </section>
      </div>
    </main>
  );
}
