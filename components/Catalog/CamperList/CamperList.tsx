import type { Camper } from '@/types/camper';
import CamperCard from './CamperCard';

import css from './CamperList.module.css';

export default function CamperList({ items }: { items: Camper[] }) {
  return (
    <div className={css.list}>
      {items.map((c) => (
        <CamperCard key={c.id} camper={c} />
      ))}
    </div>
  );
}
