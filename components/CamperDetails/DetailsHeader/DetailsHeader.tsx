'use client';

import type { Camper } from '@/types/camper';
import { formatPriceEUR } from '@/lib/utils/formatPrice';
import css from './DetailsHeader.module.css';

interface DetailsHeaderProps {
  camper: Camper;
}

export default function DetailsHeader({ camper }: DetailsHeaderProps) {
  return (
    <section className={css.header}>
      <h2 className="visually-hidden">Camper Details: {camper.name}</h2>
      <h3 className={css.name}>{camper.name}</h3>

      <div className={css.infoRow}>
        <div className={css.ratingWrapper}>
          <svg className={css.starIcon} width="16" height="16">
            <use href="/icons.svg#icon-star" />
          </svg>
          <span className={css.ratingText}>
            {camper.rating} ({camper.reviews?.length || 0} Reviews)
          </span>
        </div>

        <div className={css.locationWrapper}>
          <svg className={css.locationIcon} width="16" height="16">
            <use href="/icons.svg#icon-map" />
          </svg>
          <span className={css.locationText}>{camper.location}</span>
        </div>
      </div>

      <p className={css.price}>{formatPriceEUR(camper.price)}</p>
    </section>
  );
}