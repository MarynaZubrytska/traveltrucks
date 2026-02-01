'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { Camper } from '@/types/camper';
import { useCampersStore } from '@/lib/store/useCampersStore';
import { formatPriceEUR } from '@/lib/utils/formatPrice';

import css from './CamperList.module.css';

interface CamperCardProps {
  camper: Camper;
}

export default function CamperCard({ camper }: CamperCardProps) {
  const { toggleFavorite, isFavorite } = useCampersStore();
  const fav = isFavorite(camper.id);

  const features = [
    { id: 'icon-diagram', label: camper.transmission },
    { id: 'icon-wind', label: 'AC', show: camper.AC },
    { id: 'icon-cup-hot', label: 'Kitchen', show: camper.kitchen },
    { id: 'icon-tv', label: 'TV', show: camper.TV },
    { id: 'icon-shower', label: 'Bathroom', show: camper.bathroom },
  ];

  return (
    <article className={css.card}>
      <div className={css.imageWrapper}>
        <Image
          src={camper.gallery[0]?.original || '/placeholder.jpg'}
          alt={camper.name}
          className={css.image}
          width={292}
          height={320}
        />
      </div>

      <div className={css.content}>
        <header className={css.header}>
          <div className={css.titleRow}>
            <h2 className={css.name}>{camper.name}</h2>
            <div className={css.priceWrapper}>
              <span className={css.price}>{formatPriceEUR(camper.price)}</span>
              <button
                type="button"
                onClick={() => toggleFavorite(camper.id)}
                className={`${css.favButton} ${fav ? css.isFavorite : ''}`}
                aria-label={fav ? 'Remove from favorites' : 'Add to favorites'}
              >
                <svg className={css.heartIcon} width="24" height="24">
                  <use href="/icons.svg#icon-heart" />
                </svg>
              </button>
            </div>
          </div>

          <div className={css.infoRow}>
            <div className={css.ratingWrapper}>
              <svg className={css.starIcon} width="16" height="16">
                <use href="/icons.svg#icon-star" />
              </svg>
              <span className={css.ratingText}>
                {camper.rating}({camper.reviews?.length || 0} Reviews)
              </span>
            </div>
            <div className={css.locationWrapper}>
              <svg className={css.locationIcon} width="16" height="16">
                <use href="/icons.svg#icon-map" />
              </svg>
              <span>{camper.location}</span>
            </div>
          </div>
        </header>

        <p className={css.description}>{camper.description}</p>

        <ul className={css.featuresList}>
          {features.map(
            (item) =>
              item.show !== false && (
                <li key={item.id} className={css.featureItem}>
                  <svg width="20" height="20">
                    <use href={`/icons.svg#${item.id}`} />
                  </svg>
                  <span>{item.label}</span>
                </li>
              )
          )}
        </ul>

        <Link href={`/catalog/${camper.id}`} className={css.link}>
          Show more
        </Link>
      </div>
    </article>
  );
}
