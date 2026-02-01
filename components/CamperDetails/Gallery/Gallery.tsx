'use client';

import type { Camper } from '@/types/camper';
import Image from 'next/image';
import css from './Gallery.module.css';

type Props = {
  images: Camper['gallery'];
};

export default function Gallery({ images }: Props) {
  const displayImages = images.slice(0, 4);

  return (
    <section aria-label="Gallery" className={css.gallerySection}>
      <ul className={css.galleryList}>
        {displayImages.map((img, idx) => (
          <li key={`${img.original}-${idx}`} className={css.galleryItem}>
            <div className={css.imageWrapper}>
              <Image
                src={img.original}
                alt={`Camper photo ${idx + 1}`}
                fill
                sizes="(max-width: 292px) 100vw, 292px"
                className={css.image}
                priority={idx === 0}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
