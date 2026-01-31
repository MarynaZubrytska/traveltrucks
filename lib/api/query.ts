import type { FiltersState } from '@/types/camper';

export type CampersQueryParams = Record<string, string>;

function setParam(params: CampersQueryParams, key: string, value: string | null) {
  if (value && value.trim()) params[key] = value.trim();
}

export function buildCampersQuery(filters: FiltersState): CampersQueryParams {
  const params: CampersQueryParams = {};

  const loc = filters.location.trim();
  if (loc) {
    if (loc.includes(',')) setParam(params, 'location', loc);
    else setParam(params, 'search', loc);
  }

  if (filters.form) setParam(params, 'form', filters.form);

  if (filters.equipment.AC) setParam(params, 'AC', 'true');
  if (filters.equipment.kitchen) setParam(params, 'kitchen', 'true');
  if (filters.equipment.TV) setParam(params, 'TV', 'true');
  if (filters.equipment.bathroom) setParam(params, 'bathroom', 'true');

  if (filters.equipment.automatic) setParam(params, 'transmission', 'automatic');

  return params;
}

