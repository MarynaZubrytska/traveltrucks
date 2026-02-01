'use client';

import type { Camper } from '@/types/camper';
import css from './FeaturesTab.module.css';

export default function FeaturesTab({ camper }: { camper: Camper }) {
  const features = [
    { id: 'icon-diagram', label: camper.transmission, show: true },
    { id: 'icon-fuel-pump', label: camper.engine, show: true },
    { id: 'icon-wind', label: 'AC', show: camper.AC },
    { id: 'icon-shower', label: 'Bathroom', show: camper.bathroom },
    { id: 'icon-cup-hot', label: 'Kitchen', show: camper.kitchen },
    { id: 'icon-tv', label: 'TV', show: camper.TV },
    { id: 'icon-radios', label: 'Radio', show: camper.radio },
    { id: 'icon-fridge', label: 'Refrigerator', show: camper.refrigerator },
    { id: 'icon-microwave', label: 'Microwave', show: camper.microwave },
    { id: 'icon-gas', label: 'Gas', show: camper.gas },
    { id: 'icon-water', label: 'Water', show: camper.water },
  ];

  const details = [
    { label: 'Form', value: camper.form },
    { label: 'Length', value: camper.length },
    { label: 'Width', value: camper.width },
    { label: 'Height', value: camper.height },
    { label: 'Tank', value: camper.tank },
    { label: 'Consumption', value: camper.consumption },
  ];

  return (
    <div className={css.container}>
      <ul className={css.featuresList}>
        {features
          .filter((f) => f.show)
          .map((f) => (
            <li key={f.id} className={css.featureItem}>
              <svg className={css.featureIcon} width="20" height="20">
                <use href={`/icons.svg#${f.id}`} />
              </svg>
              <span className={css.capitalize}>{f.label}</span>
            </li>
          ))}
      </ul>

      <div className={css.detailsSection}>
        <h3 className={css.detailsTitle}>Vehicle details</h3>
        <dl className={css.detailsList}>
          {details.map((d) => (
            <div key={d.label} className={css.detailsRow}>
              <dt className={css.detailLabel}>{d.label}</dt>
              <dd className={`${css.detailValue} ${css.capitalize}`}>
                {d.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
