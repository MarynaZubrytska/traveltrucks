'use client';

import { useCampersStore } from '@/lib/store/useCampersStore';
import type { CamperForm } from '@/types/camper';
import type { ChangeEvent } from 'react';

import css from './FiltersSidebar.module.css';

interface FilterButtonProps {
  active: boolean;
  onClick: () => void;
  label: string;
  iconId: string;
}

export default function FiltersSidebar() {
  const { filters, setLocation, toggleEquipment, setForm, search } =
    useCampersStore();

  const toggleForm = (value: CamperForm) => {
    setForm(filters.form === value ? '' : value);
  };

  return (
    <aside className={css.sidebar}>
      <div className={css.locationWrapper}>
        <label className={css.label}>Location</label>
        <div className={css.inputInner}>
          <input
            className={css.input}
            value={filters.location}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setLocation(e.target.value)
            }
            placeholder="City"
          />
          <svg className={css.locationIcon} width="20" height="20">
            <use href="/icons.svg#icon-map" />
          </svg>
        </div>
      </div>

      <p className={css.filtersTitle}>Filters</p>

      <div className={css.section}>
        <h3 className={css.sectionTitle}>Vehicle equipment</h3>
        <div className={css.grid}>
          <FilterButton
            active={filters.equipment.AC}
            onClick={() => toggleEquipment('AC')}
            label="AC"
            iconId="icon-wind"
          />
          <FilterButton
            active={filters.equipment.automatic}
            onClick={() => toggleEquipment('automatic')}
            label="Automatic"
            iconId="icon-diagram"
          />
          <FilterButton
            active={filters.equipment.kitchen}
            onClick={() => toggleEquipment('kitchen')}
            label="Kitchen"
            iconId="icon-cup-hot"
          />
          <FilterButton
            active={filters.equipment.TV}
            onClick={() => toggleEquipment('TV')}
            label="TV"
            iconId="icon-tv"
          />
          <FilterButton
            active={filters.equipment.bathroom}
            onClick={() => toggleEquipment('bathroom')}
            label="Bathroom"
            iconId="icon-shower"
          />
        </div>
      </div>

      <div className={css.section}>
        <h3 className={css.sectionTitle}>Vehicle type</h3>
        <div className={css.grid}>
          <FilterButton
            active={filters.form === 'panelTruck'}
            onClick={() => toggleForm('panelTruck')}
            label="Van"
            iconId="icon-grid1x2"
          />
          <FilterButton
            active={filters.form === 'fullyIntegrated'}
            onClick={() => toggleForm('fullyIntegrated')}
            label="Fully Integrated"
            iconId="icon-grid"
          />
          <FilterButton
            active={filters.form === 'alcove'}
            onClick={() => toggleForm('alcove')}
            label="Alcove"
            iconId="icon-grid3x3"
          />
        </div>
      </div>

      <button type="button" className={css.searchBtn} onClick={search}>
        Search
      </button>
    </aside>
  );
}

function FilterButton({ active, onClick, label, iconId }: FilterButtonProps) {
  const buttonClass = `${css.filterCard} ${active ? css.active : ''}`.trim();

  return (
    <button
      type="button"
      className={buttonClass}
      onClick={onClick}
      aria-pressed={active}
    >
      <svg className={css.filterIcon} width="32" height="32">
        <use href={`/icons.svg#${iconId}`} />
      </svg>
      <span className={css.filterLabel}>{label}</span>
    </button>
  );
}