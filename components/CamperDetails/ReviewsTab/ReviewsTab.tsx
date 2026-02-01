'use client';

import type { CamperReview } from '@/types/camper';
import RatingStars from '@/components/CamperDetails/RatingStars/RatingStars';
import css from './ReviewsTab.module.css';

interface ReviewsTabProps {
  reviews: CamperReview[];
}

export default function ReviewsTab({
  reviews,
}: {
  reviews: ReviewsTabProps['reviews'];
}) {
  if (!reviews || reviews.length === 0) {
    return <p className={css.noReviews}>No reviews yet.</p>;
  }

  return (
    <ul className={css.reviewsList}>
      {reviews.map((review, idx) => {
        const initial =
          review.reviewer_name?.trim().charAt(0).toUpperCase() || '?';

        return (
          <li key={`${review.reviewer_name}-${idx}`} className={css.reviewItem}>
            <div className={css.reviewerHeader}>
              <div className={css.avatar} aria-hidden="true">
                {initial}
              </div>
              <div className={css.reviewerMeta}>
                <p className={css.reviewerName}>{review.reviewer_name}</p>
                <RatingStars rating={review.reviewer_rating} />
              </div>
            </div>
            <p className={css.comment}>{review.comment}</p>
          </li>
        );
      })}
    </ul>
  );
}