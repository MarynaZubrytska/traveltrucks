import type { Camper } from '@/types/camper';
import CamperCard from './CamperCard';

import css from './CamperList.module.css';

export default function CamperList({ items }: { items: Camper[] }) {
  return (
    <ul className={css.list}>
      {items.map((c) => (
        <li key={c.id} className={css.item}>
          <CamperCard camper={c} />
        </li>
      ))}
    </ul>
  );
}