import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { Camper, FiltersState } from '@/types/camper';
import { fetchCampers } from '@/lib/api/campers';
import { getErrorMessage } from '@/lib/api/error';

const DEFAULT_FILTERS: FiltersState = {
  location: '',
  form: '',
  equipment: {
    AC: false,
    automatic: false,
    kitchen: false,
    TV: false,
    bathroom: false,
  },
};

type FavoritesMap = Record<string, true>;

type CampersStore = {
  items: Camper[];
  total: number;
  page: number;
  limit: number;
  isLoading: boolean;
  error: string | null;

  filters: FiltersState;
  favorites: FavoritesMap;

  setLocation: (value: string) => void;
  toggleEquipment: (key: keyof FiltersState['equipment']) => void;
  setForm: (value: FiltersState['form']) => void;
  resetFilters: () => void;

  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;

  search: () => Promise<void>;
  loadMore: () => Promise<void>;
  canLoadMore: () => boolean;
};

export const useCampersStore = create<CampersStore>()(
  persist(
    (set, get) => ({
      items: [],
      total: 0,
      page: 1,
      limit: 4,
      isLoading: false,
      error: null,

      filters: DEFAULT_FILTERS,
      favorites: {},

      setLocation: (value) =>
        set((state) => ({
          filters: { ...state.filters, location: value },
        })),

      toggleEquipment: (key) =>
        set((state) => ({
          filters: {
            ...state.filters,
            equipment: {
              ...state.filters.equipment,
              [key]: !state.filters.equipment[key],
            },
          },
        })),

      setForm: (value) =>
        set((state) => ({
          filters: { ...state.filters, form: value },
        })),

      resetFilters: () => set({ filters: DEFAULT_FILTERS }),

      toggleFavorite: (id) =>
        set((state) => {
          const next: FavoritesMap = { ...state.favorites };
          if (next[id]) delete next[id];
          else next[id] = true;
          return { favorites: next };
        }),

      isFavorite: (id) => Boolean(get().favorites[id]),

      canLoadMore: () => {
        const { items, total } = get();
        return items.length < total;
      },

      search: async () => {
        const { limit, filters } = get();

        set({
          items: [],
          total: 0,
          page: 1,
          isLoading: true,
          error: null,
        });

        try {
          const data = await fetchCampers({ page: 1, limit, filters });
          set({
            items: data.items,
            total: data.total,
            isLoading: false,
          });
        } catch (error: unknown) {
          set({
            isLoading: false,
            error: getErrorMessage(error),
          });
        }
      },

      loadMore: async () => {
        const { page, limit, filters, items, isLoading } = get();
        if (isLoading) return;

        const nextPage = page + 1;
        set({ isLoading: true, error: null });

        try {
          const data = await fetchCampers({ page: nextPage, limit, filters });

          const newItems = data.items.filter(
            (newItem) =>
              !items.some((existingItem) => existingItem.id === newItem.id)
          );

          set({
            items: [...items, ...newItems],
            total: data.total,
            page: nextPage,
            isLoading: false,
          });
        } catch (error: unknown) {
          set({
            isLoading: false,
            error: getErrorMessage(error),
          });
        }
      },
    }),
    {
      name: 'traveltrucks-store',
      partialize: (state) => ({
        favorites: state.favorites,
        filters: state.filters,
      }),
    }
  )
);
