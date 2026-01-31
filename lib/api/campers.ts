import { api } from './api';
import type { Camper, CampersResponse, FiltersState } from '@/types/camper';
import { buildCampersQuery } from './query';

export async function fetchCampers(opts: {
  page: number;
  limit: number;
  filters: FiltersState;
}): Promise<CampersResponse> {
  const { page, limit, filters } = opts;

  const params = {
    page: String(page),
    limit: String(limit),
    ...buildCampersQuery(filters),
  };

  const { data } = await api.get<CampersResponse>('/campers', { params });
  return data;
}

export async function fetchCamperById(id: string): Promise<Camper> {
  const { data } = await api.get<Camper>(`/campers/${id}`);
  return data;
}