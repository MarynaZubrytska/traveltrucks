'use client';

import css from './RatingStars.module.css';

type Props = {
  rating: number; 
};

export default function RatingStars({ rating }: Props) {

  const roundedRating = Math.round(rating);

  const stars = [1, 2, 3, 4, 5];

  return (
    <div className={css.starsWrapper} aria-label={`Rating ${rating} out of 5`}>
      {stars.map((star) => (
        <svg
          key={star}
          className={`${css.starIcon} ${star <= roundedRating ? css.filled : css.empty}`}
          width="16"
          height="16"
        >
          <use href="/icons.svg#icon-star" />
        </svg>
      ))}
    </div>
  );
}