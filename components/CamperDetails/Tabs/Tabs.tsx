'use client';

import { useState } from 'react';
import type { Camper } from '@/types/camper';
import FeaturesTab from '../FeaturesTab/FeaturesTab';
import ReviewsTab from '../ReviewsTab/ReviewsTab';
import BookingForm from '../BookingForm/BookingForm';

import css from './Tabs.module.css';

type Tab = 'features' | 'reviews';

export default function Tabs({ camper }: { camper: Camper }) {
  const [activeTab, setActiveTab] = useState<Tab>('features');

  return (
    <section className={css.tabsSection}>
      <div className={css.tabsNav}>
        <button
          type="button"
          className={`${css.tabBtn} ${activeTab === 'features' ? css.active : ''}`}
          onClick={() => setActiveTab('features')}
        >
          Features
        </button>
        <button
          type="button"
          className={`${css.tabBtn} ${activeTab === 'reviews' ? css.active : ''}`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews
        </button>
      </div>
      <div className={css.contentGrid}>
        <div className={css.tabContent}>
          {activeTab === 'features' ? (
            <FeaturesTab camper={camper} />
          ) : (
            <ReviewsTab reviews={camper.reviews ?? []} />
          )}
        </div>
        <aside>
          <BookingForm camperName={camper.name} />
        </aside>
      </div>
    </section>
  );
}
